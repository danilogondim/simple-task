const express = require('express');
const router = express.Router();

module.exports = ({
  getTaskersByService
}) => {
  /* GET users listing. */
  router.get('/:id/users', (req, res) => {

    const { id } = req.params;

    getTaskersByService(id)
      .then((users) => res.json(users))
      .catch((err) => res.json({
        error: err.message
      }));

  });

  return router;
};