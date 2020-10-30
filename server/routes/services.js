const express = require('express');
const router = express.Router();

const {
  getBestReviewsByTaskers
} = require('../helpers/dataHelpers');

module.exports = ({
  getTaskersByService,
  getBestReviews
}) => {
  /* GET taskers listing for a specific service. */
  router.get('/:id/users', (req, res) => {

    const { id } = req.params;

    Promise.all([getTaskersByService(id), getBestReviews(3)])
      .then(all => {
        taskersWithReviews = getBestReviewsByTaskers(all[0], all[1]);
        res.json(taskersWithReviews);
      })
      .catch((err) => res.json({
        error: err.message
      }));
  });

  return router;
};