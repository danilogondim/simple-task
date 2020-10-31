DROP TABLE IF EXISTS chat_messages CASCADE;
CREATE TABLE chat_messages (
  participant_1 INTEGER REFERENCES users(id) ON DELETE CASCADE,
  participant_2 INTEGER REFERENCES users(id) ON DELETE CASCADE,
  messages JSONB NOT NULL,
  PRIMARY KEY (participant_1, participant_2)
);