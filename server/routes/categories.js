const express = require('express');
const router = express.Router();

module.exports = ({
  getCategories
}) => {

  /* GET categories listing. */
  router.get('/', (req, res) => {
    getCategories()
      .then((categories) => res.json(categories))
      .catch((err) => res.json({
        error: err.message
      }));
  });

  return router;
};