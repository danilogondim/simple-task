-- participant_1 and participant_2 should be defined when the chat is created. The creator will be participant_1
-- inside a message:
-- 'sender_id', 'sent_at' and'message' will be related to the sender
-- 'received_at' and 'read_at' are related to the receiver

INSERT INTO
chat_messages(participant_1, participant_2, messages)
VALUES
(1, 7, 
'[
  {
    "sender_id":1,
    "sent_at":"2020-10-22 08:00:00",
    "received_at":"2020-10-22 08:15:00",
    "read_at":"2020-10-22 08:20:00",
    "message":"Hi John! I saw that you are offering landscaping services. I have a small garden that I would like to renovate"
  },
  {
    "sender_id":1,
    "sent_at":"2020-10-22 08:05:00",
    "received_at":"2020-10-22 08:15:00",
    "read_at":"2020-10-22 08:20:00",
    "message":"I am wondering if I send you a picture if you are able to estimate how much it will cost me apart from your service and how long it could take"
  },
  {
    "sender_id":7,
    "sent_at":"2020-10-22 08:22:00",
    "received_at":"2020-10-22 08:22:10",
    "read_at":"2020-10-22 08:23:00",
    "message":"Hello, Daniel! Sure, I''ve done that before with other clients and it worked well. I just need to know about your expectations so I can make a reasonable quote"
  }
]')