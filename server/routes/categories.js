const express = require('express');
const router = express.Router();
const {
  getServicesByCategories
} = require('../helpers/dataHelpers');

module.exports = ({
  getCategories
}) => {

  /* GET categories listing. */
  router.get('/', (req, res) => {
    getCategories()
      .then((categories) => {
        const formattedCategories = getServicesByCategories(categories);
        res.json(formattedCategories)
      })
      .catch((err) => res.json({
        error: err.message
      }));
  });

  return router;
};