DROP TABLE IF EXISTS availabilities CASCADE;
CREATE TABLE availabilities (
  id SERIAL PRIMARY KEY NOT NULL,
  tasker_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  -- expects a number between 0 and 6
  day INTEGER NOT NULL,
  start_hour TIME NOT NULL,
  end_hour TIME NOT NULL
);

-- situation the table is trying to handle: I don't want to work at Mondays from 7am to 1pm

-- situation the table is not handling: I don't want to work from October 23th until November 1st (how it can be handled with the current solution: users/id/edit -> is_available = false)