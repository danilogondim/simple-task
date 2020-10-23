DROP TABLE IF EXISTS payments CASCADE;
CREATE TABLE payments (
  task_id INTEGER REFERENCES tasks(id) ON DELETE CASCADE,
  tasker_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  -- all values are expected in cents
  subtotal INTEGER NOT NULL,
  discount INTEGER,
  comission INTEGER NOT NULL,
  tax INTEGER NOT NULL,
  total INTEGER NOT NULL,
  confirmed_at TIMESTAMP,
  confirmation_code VARCHAR(255),
  PRIMARY KEY (task_id, tasker_id, user_id)
);