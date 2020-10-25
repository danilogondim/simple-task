DROP TABLE IF EXISTS availabilities CASCADE;
CREATE TABLE availabilities (
  id SERIAL PRIMARY KEY NOT NULL,
  tasker_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  availability JSON NOT NULL
);

-- availability format:
--    keys = day (expects a number between 0 and 6)
--    values = array of arrays with every available interval: [[start_hour, end_hour],[start_hour, end_hour]]

--    ex1 (tasker that is available from Monday(1) to Friday(5) from 9 to 17):
--    '{ 
--      "1": [["09:00:00", "17:00:00"]], 
--      "2": [["09:00:00", "17:00:00"]],
--      "3": [["09:00:00", "17:00:00"]],
--      "4": [["09:00:00", "17:00:00"]],
--      "5": [["09:00:00", "17:00:00"]]
--    }'

--    ex2 (tasker available only on Mondays from 9 to 12 and from 13 to 17):
--    '{ 
--      "1": [["09:00:00", "12:00:00"], ["13:00:00", "17:00:00"]]
--    }'



-- situation the table is trying to handle: I don't want to work at Mondays from 7am to 1pm

-- situation the table is not handling: I don't want to work from October 23th until November 1st (how it can be handled with the current solution: users/id/edit -> is_available = false)