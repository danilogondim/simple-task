const express = require('express');
const router = express.Router();

const {
  getBestReviewsByTaskers
} = require('../helpers/dataHelpers');


module.exports = ({
  getTaskersByService,
  getBestReviews
}) => {
  /* GET users listing. */
  router.get('/:id/users', (req, res) => {

    const { id } = req.params;

    Promise.all([getTaskersByService(id), getBestReviews()])
    .then(all => {
      taskersWithReviews = getBestReviewsByTaskers(all[0], all[1]);
    })

    getTaskersByService(id)
      .then((users) => res.json(users))
      .catch((err) => res.json({
        error: err.message
      }));

  });

  return router;
};