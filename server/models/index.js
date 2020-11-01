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

  const getUserById = id => {
    const query = {
      text: `
      SELECT first_name, last_name, phone, email, photo_url, vehicle, AVG(user_rating) AS average_rating
      FROM users
      JOIN task_reviews
      ON users.id = tasker_id
      WHERE id = $1
      GROUP BY first_name, last_name, phone, email, photo_url, vehicle`,
      values: [id]
    };
    return db
      .query(query)
      .then(result => result.rows[0])
      .catch((err) => err);
  }

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
      SELECT users.id, first_name, last_name, phone, email, address, coordinates, photo_url, summary, vehicle, hourly_rate, average_rating, reviews_count, availability
      FROM availabilities JOIN
        (
          SELECT users.id, first_name, last_name, phone, email, address, coordinates, photo_url, summary, vehicle, hourly_rate, AVG(user_rating) AS average_rating, COUNT(user_rating) AS reviews_count
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

  const getBestReviews = (limit) => {
    const query = {
      text: ` 
            SELECT execution_date, service_name, service_id, reviewer, tasker_id, user_comment, user_rating
            FROM (
                  SELECT
                    ROW_NUMBER() OVER (PARTITION BY service_id, tasker_id ORDER BY execution_date DESC) AS r, t.*
                  FROM (
                        SELECT DATE(start_time) AS execution_date, service_name, service_id, reviewer, tasks.tasker_id, user_comment, user_rating
                        FROM tasks
                        JOIN (
                              SELECT first_name AS reviewer, service_name, task_id, task_reviews.tasker_id, user_comment, user_rating
                              FROM task_reviews
                              JOIN  (
                                      SELECT services.name AS service_name, task_reviews.tasker_id, service_id, MAX(user_rating) AS max_rating
                                      FROM task_reviews
                                      JOIN tasks ON task_id = tasks.id
                                      JOIN services ON service_id = services.id
                                      GROUP BY services.name, task_reviews.tasker_id, service_id
                                    ) AS max_ratings
                              ON max_ratings.tasker_id = task_reviews.tasker_id AND max_rating = task_reviews.user_rating
                              JOIN users ON users.id = user_id
                            ) AS max_reviews
                        ON tasks.id = task_id
                  ) t) x
            WHERE
              x.r <= $1;`,
      values: [limit]
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
      ORDER BY categories.name, services.name`
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
      text: `
      SELECT tasks.*, services.name AS service_name, hourly_rate
      FROM tasks
      JOIN services ON service_id = services.id
      JOIN service_taskers
      ON tasks.tasker_id = service_taskers.tasker_id
      AND services.id = service_taskers.service_id
      WHERE tasks.id = $1`,
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
              tasks.id            AS task_id,
              tasks.description   AS task,
              users.first_name,
              users.last_name,
              service_taskers.hourly_rate AS hourly_rate,
              to_char(
                (to_char(started_at :: time, 'HH24:MI'):: time
                ),
                'HH24:MI'
              ) AS start_time,
              to_char(
                (to_char(completed_at :: time, 'HH24:MI'):: time
                ),
                'HH24:MI'
              ) AS end_time,
              EXTRACT(EPOCH FROM (completed_at - started_at))/3600 AS total_time
            FROM tasks
            JOIN users ON tasks.tasker_id = users.id
            JOIN service_taskers ON tasks.service_id = service_taskers.service_id
            AND service_taskers.tasker_id = users.id
            WHERE tasks.id = $1`,
      values: [id]
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addTask = (taskObject) => {
    const {
      number,
      category_id,
      service_id,
      description,
      estimated_duration,
      start_time,
      start_location,
      start_coordinates,
      end_location,
      end_coordinates,
      user_id,
      tasker_id
    } = taskObject;
    const query = {
      text: `
      INSERT INTO tasks (number, category_id, service_id, description, estimated_duration, start_time, start_location, start_coordinates, end_location, end_coordinates, user_id, tasker_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *`,
      values: [number,
        category_id,
        service_id,
        description,
        estimated_duration,
        start_time,
        start_location,
        start_coordinates,
        end_location,
        end_coordinates,
        user_id,
        tasker_id]
    };

    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  const getChatsByUser = id => {
    const query = {
      text: `
      SELECT id AS contact_id, photo_url AS contact_photo, CONCAT(first_name, ' ', last_name) AS contact_name, messages
      FROM chat_messages
      JOIN users ON id = participant_1 OR  id = participant_2
      WHERE (participant_1 = $1 OR participant_2 = $1) AND id <> $1
      `,
      values: [id]
    };
    return db
      .query(query)
      .then(result => result.rows)
      .catch((err) => err);
  }

  const addMessage = (message, participant_1, participant_2) => {
    const query = {
      text: `
      UPDATE chat_messages
      SET messages = messages || $1::jsonb
      WHERE participant_1 = $2 and participant_2 = $3
      RETURNING *
    `,
      values: [message, participant_1, participant_2]
    };
    return db
      .query(query)
      .then(result => result.rows[0])
      .catch((err) => err);
  }
  const updateTask = taskObject => {
    if (taskObject.id && Object.keys(taskObject).length > 1) {
      // we can add more fields to update database
      const taskFields = ['started_at', 'completed_at'];
      
      // the sql query and the values array should be build dynamically
      let text = `UPDATE tasks \nSET `;
      const values = [taskObject.id];

      for (const field of taskFields) {
        if (taskObject[field]) {
          values.push(taskObject[field]);
          text += `${field} = $${values.length},\n`;
        }
      }
      text = text.slice(0, -2) + "\nWHERE tasks.id = $1 \nRETURNING *;";
      return db.query(text, values)
        .then(result => {
          if (result.rows[0]) {
            return result.rows[0];
          }
          throw 'The task id does not exist';
        })
        .catch(err => {
          return err});
    }

    throw 'It seems that the task id is missing or there are no fields to update';
  };

  return {
    getUsers,
    getUserById,
    getUserByEmail,
    addUser,
    updateUser,
    getTaskersByService,
    getBestReviews,
    getCategories,
    getTasks,
    getTaskById,
    getTaskForPayment,
    addTask,
    getChatsByUser,
    addMessage,
    updateTask
  };
};