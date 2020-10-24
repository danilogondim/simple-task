const express = require('express');
const router = express.Router();
// const {
//   getPostsByUsers
// } = require('../helpers/dataHelpers');

module.exports = ({
  getUsers,
  getUserByEmail,
  addUser,
  updateUser
}) => {
  /* GET users listing. */
  router.get('/', (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) => res.json({
        error: err.message
      }));
  });

  /* create new user */
  router.post('/', (req, res) => {

    console.log(req.body);

    const {
      first_name,
      last_name,
      phone,
      email,
      password,
      address,
      coordinates,
      photo_url
    } = req.body;

    getUserByEmail(email)
      .then(user => {

        if (user) {
          res.json({
            msg: 'Sorry, a user account with this email already exists'
          });
        } else {
          return addUser(first_name, last_name, phone, email, password, address, [1,2], photo_url)
        }

        // Need to updated coordinates

      })
      .then(newUser => res.json(newUser))
      .catch(err => res.json({
        error: err.message
      }));

  })

  /* update user information */
  router.put("/:id", (req, res) => {

    // we need to include some logic to be able to verify if the user who is doing the request is the owner of the account

    const {
      first_name,
      last_name,
      phone,
      email,
      password,
      address,
      coordinates,
      is_tasker,
      photo_url,
      is_available,
      vehicle
    } = req.body;

    const { id } = req.params;

    getUserByEmail(email)
      .then(user => {

        if (user) {
          res.json({
            msg: 'Sorry, a user account with this email already exists'
          });
        } else {
          return updateUser({
            id,
            first_name,
            last_name,
            phone,
            email,
            password,
            address,
            coordinates,
            is_tasker,
            photo_url,
            is_available,
            vehicle
          })
        }
      })
      .then(updatedUser => res.json(updatedUser))
      .catch(err => res.json({
        error: err.message
      }));
  });

  return router;
};