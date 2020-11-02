const express = require('express');
const router = express.Router();

module.exports = ({
  addMessage
}) => {

  /* Add a new message to the chat_messages. */
  router.post('/', (req, res) => {
    const { message, sender_id, sent_at, receiver_id } = req.body;

    const participant_1 = sender_id < receiver_id ? sender_id : receiver_id;
    const participant_2 = sender_id < receiver_id ? receiver_id : sender_id;
    const messageObj = { sender_id, sent_at, message };

    addMessage(messageObj, participant_1, participant_2)
      .then((message) => {
        res.json(message)
      })
      .catch((err) => res.json({
        error: err.message
      }));
  });

  return router;
};