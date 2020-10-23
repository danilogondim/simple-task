DROP TABLE IF EXISTS payments CASCADE;
CREATE TABLE payments (
  task_id INTEGER REFERENCES tasks(id) ON DELETE CASCADE,
  tasker_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  -- all values are expected in cents
  subtotal INTEGER NOT NULL,
  -- maybe the discount field should be in another table, like the tasks table. The payment is created after the service is completed, but probably the tasker could already have offered some discount and we need to keep track
  discount INTEGER,
  comission INTEGER NOT NULL,
  tax INTEGER NOT NULL,
  total INTEGER NOT NULL,
  confirmed_at TIMESTAMP DEFAULT now(),
  confirmation_code VARCHAR(255) NOT NULL,
  PRIMARY KEY (task_id, tasker_id, user_id)
);