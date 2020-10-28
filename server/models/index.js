module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: 'SELECT * FROM users',
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUserByEmail = email => {

    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email]
    };

    return db
      .query(query)
      .then(result => result.rows[0])
      .catch((err) => err);
  };


  // is_tasker, is_available and vehicle will not be filled in this step. Becoming a tasker is considered an update
  const addUser = (firstName, lastName, phone, email, password, address, coordinates, photoUrl) => {
    const query = {
      text: `INSERT INTO users (first_name, last_name, phone, email, password, address, coordinates, photo_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      values: [firstName, lastName, phone, email, password, address, coordinates, photoUrl]
    };

    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };


  // used if a user wants to update some information or decides to become a tasker
  const updateUser = userObject => {
    // a query will only be build and run if an user id was provided and the passed object has more than the id key
    if (userObject.id && Object.keys(userObject).length > 1) {

      // all the accepted fields in our database
      const userFields = ['first_name', 'last_name', 'phone', 'email', 'password', 'address', 'coordinates', 'is_tasker', 'photo_url', 'is_available', 'vehicle'];

      // the sql query and the values array should be build dynamically
      let text = `UPDATE users \nSET `;
      const values = [userObject.id];

      for (const field of userFields) {
        if (userObject[field]) {
          values.push(userObject[field]);
          text += `${field} = $${values.length},\n`;
        }
      }
      text = text.slice(0, -2) + "\nWHERE users.id = $1 \nRETURNING *;";

      return db.query(text, values)
        .then(result => {
          if (result.rows[0]) {
            return result.rows[0];
          }
          throw 'The user id does not exist';
        })
        .catch(err => err);
    }

    throw 'It seems that the user id is missing or there are no fields to update';
  };

  const getTaskersByService = service_id => {

    const query = {
      text: `
      SELECT users.id, first_name, last_name, phone, email, address, coordinates, photo_url, summary, vehicle, hourly_rate, user_rating, availability
      FROM availabilities JOIN
        (
          SELECT users.id, first_name, last_name, phone, email, address, coordinates, photo_url, summary, vehicle, hourly_rate, AVG(user_rating) AS user_rating
          FROM users
          JOIN service_taskers ON users.id = service_taskers.tasker_id
          LEFT JOIN task_reviews ON users.id = task_reviews.tasker_id
        
          WHERE
            service_id = $1 AND
            is_tasker = 't' AND
            is_available = 't'
            GROUP BY users.id, first_name, last_name, phone, email, address, coordinates, photo_url, summary, vehicle, hourly_rate
        ) AS users ON tasker_id = users.id;
      `,
      values: [service_id]
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getCategories = () => {
    const query = {
      text: `
      SELECT
        categories.id AS category_id,
        categories.name AS category,
        categories.description AS category_description,
        categories.thumbnail_photo_url AS category_thumbnail,
        categories.cover_photo_url AS category_cover_photo,
        services.id AS service_id,
        services.name AS service,
        services.description AS service_description,
        services.thumbnail_photo_url AS service_thumbnail,
        MIN(hourly_rate) AS min_rate,
        MAX(hourly_rate) AS max_rate
      FROM categories
      JOIN services ON categories.id = category_id
      JOIN service_taskers ON services.id = service_id
      JOIN users ON tasker_id = users.id
      WHERE is_available = 't'
      GROUP BY categories.id, categories.name, categories.description, categories.thumbnail_photo_url, categories.cover_photo_url, services.id, services.name, services.description, services.thumbnail_photo_url
      ORDER BY categories.id, services.id`
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getTasks = () => {
    const query = {
      text: 'SELECT * FROM tasks',
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getTaskById = (id) => {
    const query = {
      text: `SELECT * FROM tasks WHERE id = $1`,
      values: [id]
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getTaskForPayment = (id) => {
    const query = {
      text: `SELECT 
              id AS task_id,
              description AS task,
              user_id,
              tasker_id,
              started_at AS start_time,
              completed_at AS end_time
            FROM tasks WHERE id = $1`,
      values: [id]
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  return {
    getUsers,
    getUserByEmail,
    addUser,
    updateUser,
    getTaskersByService,
    getCategories,
    getTasks,
    getTaskById,
    getTaskForPayment
  };
};


// `
// SELECT users.id, first_name, last_name, phone, email, address, coordinates, photo_url, vehicle, hourly_rate, availability, AVG(user_rating) AS user_rating
// FROM users
// JOIN service_taskers ON users.id = service_taskers.tasker_id
// JOIN availabilities ON users.id = availabilities.tasker_id
// LEFT JOIN task_reviews ON users.id = task_reviews.tasker_id

// WHERE
//   service_id = 1 AND
//   is_tasker = 't' AND
//   is_available = 't'
//   GROUP BY users.id, first_name, last_name, phone, email, address, coordinates, photo_url, vehicle, hourly_rate, availability;
// `



// `
// SELECT * from availabilities JOIN
// (SELECT users.id, first_name, last_name, phone, email, address, coordinates, photo_url, vehicle, hourly_rate, AVG(user_rating) AS user_rating
// FROM users
// JOIN service_taskers ON users.id = service_taskers.tasker_id
// LEFT JOIN task_reviews ON users.id = task_reviews.tasker_id

// WHERE
//   service_id = 1 AND
//   is_tasker = 't' AND
//   is_available = 't'
//   GROUP BY users.id, first_name, last_name, phone, email, address, coordinates, photo_url, vehicle, hourly_rate) AS users ON tasker_id = users.id;
// `