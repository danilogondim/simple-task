const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


module.exports = ({
  getTasks,
  getTaskById,
  getTaskForPayment,
  addTask
}) => {
  /* GET Tasks listing. */
  router.get('/', (req, res) => {
    getTasks()
      .then((tasks) => res.json(tasks))
      .catch((err) => res.json({
        error: err.message
      }));

  });

  /* GET a Task by ID */
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    getTaskById(id)
      .then((task) => res.json(task))
      .catch((err) => res.json({
        error: err.message
      }));

  });

  /* create a new task */
  router.post('/new', (req, res) => {
    //Getting ID from the JWT Token
    const decoded = jwt.verify(req.body.token, process.env.TOKEN_SECRET);
    const user_id = decoded.id
    addTask({...req.body, user_id})
    .then((task) => res.json(task))
    .catch((err) => res.json({
      error: err.message
    }));
  });

  /* GET a Task for Payment by ID */
  router.get('/:id/payment', (req, res) => {
    const { id } = req.params;
    getTaskForPayment(id)
      .then((task) => res.json(task))
      .catch((err) => res.json({
        error: err.message
      }));

  });

  return router;
};