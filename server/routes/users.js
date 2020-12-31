const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


module.exports = ({
  getUserById,
  getUserByEmail,
  addUser,
  updateUser,
  getChatsByUser
}) => {

  /* GET a specific user. */
  router.get('/:id', (req, res) => {

    const { id } = req.params;

    getUserById(id)
      .then((user) => res.json(user))
      .catch((err) => res.json({
        error: err.message
      }));
  });

  /* create new user */
  router.post('/', (req, res) => {
    const {
      first_name,
      last_name,
      phone,
      email,
      password,
      number,
      street,
      unit,
      city,
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

          let address = '';

          unit ?
            (address = `${unit}-${number} ${street}, ${city}`)
            :
            (address = `${number} ${street}, ${city}`);

          return addUser(first_name, last_name, phone, email, password, address, coordinates, photo_url)

        }

      })
      .then(user => {
        const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
        res.json({ token, user })
        res.end()
      })
      .then(newUser => res.json(newUser))
      .catch(err => res.json({
        error: err.message
      }));

  })

  /* login functionality */
  router.post('/authenticate', (req, res) => {

    const {
      email,
      password,
    } = req.body;


    getUserByEmail(email)
      .then(user => {
        if (user) {

          if (user.password === password) {

            const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);

            res.json({ user, token })
            res.end()

            //Getting ID from the JWT Token
            // const decoded = jwt.verify(token, "82jd73h@hsd8ko83");  
            // let userId = decoded.id   
            // console.log('userID----------->', userId) 


          } else {
            res.json({
              msg: 'Password and email do not match!'
            });
          }
        } else {
          res.json({
            msg: 'Email not registered!'
          });
        }
      })
      .catch(err => {
        res.json({
          error: err.message
        })
      });
  });


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


  /* GET the chats for a specific user. */
  router.get('/:id/chats', (req, res) => {

    const { id } = req.params;

    getChatsByUser(id)
      .then((user) => res.json(user))
      .catch((err) => res.json({
        error: err.message
      }));
  });

  return router;
};