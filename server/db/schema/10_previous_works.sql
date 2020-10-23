DROP TABLE IF EXISTS previous_works CASCADE;
CREATE TABLE previous_works (
  id SERIAL PRIMARY KEY NOT NULL,
  tasker_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  comment VARCHAR(255) NOT NULL,
  photo_url TEXT NOT NULL,
  concluded_at DATE NOT NULL
);