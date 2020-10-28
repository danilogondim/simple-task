const express = require('express');
const router = express.Router();

module.exports = ({
  getTasks
}) => {
  /* GET tasks listing. */
  router.get('/', (req, res) => {
    getTasks()
      .then((tasks) => res.json(tasks))
      .catch((err) => res.json({
        error: err.message
      }));

  });

  return router;
};