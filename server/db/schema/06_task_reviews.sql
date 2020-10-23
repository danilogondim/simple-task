DROP TABLE IF EXISTS task_reviews CASCADE;
CREATE TABLE task_reviews (
  task_id INTEGER REFERENCES tasks(id) ON DELETE CASCADE,
  tasker_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  -- tasker_comment and tasker_rate is expected to be tasker input, evaluating the user
  tasker_comment VARCHAR(255), 
  tasker_rate INTEGER,
  -- user_comment and user_rate is expected to be user input, evaluating the tasker
  user_comment VARCHAR(255),
  user_rate INTEGER,
  PRIMARY KEY (task_id, tasker_id, user_id)
);