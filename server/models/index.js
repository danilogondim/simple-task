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
    }

    return db
      .query(query)
      .then(result => result.rows[0])
      .catch((err) => err);
  }

  // is_tasker, is_available and vehicle will not be filled in this step. Becoming a tasker is considered an update
  const addUser = (firstName, lastName, phone, email, password, address, coordinates, photoUrl) => {
    const query = {
      text: `INSERT INTO users (first_name, last_name, phone, email, password, address, coordinates, photo_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      values: [firstName, lastName, phone, email, password, address, coordinates, photoUrl]
    }

    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  }


  return {
    getUsers,
    getUserByEmail,
    addUser
  };
};
