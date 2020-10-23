DROP TABLE IF EXISTS availabilities CASCADE;
CREATE TABLE availabilities (
  id SERIAL PRIMARY KEY NOT NULL,
  tasker_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  -- expects a number between 0 and 6
  day INTEGER NOT NULL,
  start_hour TIME NOT NULL,
  end_hour TIME NOT NULL
);