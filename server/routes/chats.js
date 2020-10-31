const express = require('express');
const router = express.Router();

module.exports = ({
  addMessage
}) => {

  /* Add a new message to the chat_messages. */
  router.post('/', (req, res) => {
    addMessage()
      .then((message) => {
        res.json(message)
      })
      .catch((err) => res.json({
        error: err.message
      }));
  });

  return router;
};