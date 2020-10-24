DROP TABLE IF EXISTS tasks CASCADE;
CREATE TABLE tasks (
  id SERIAL,
  number VARCHAR(255),
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  service_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT now(),
  description VARCHAR(255) NOT NULL,
  estimated_duration INTEGER NOT NULL,
  start_time TIMESTAMP NOT NULL,
  start_location VARCHAR(255) NOT NULL,
  start_coordinates VARCHAR[],
  end_location VARCHAR(255),
  end_coordinates VARCHAR[],
  accepted_at TIMESTAMP,
  cancelled_at TIMESTAMP,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  tasker_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  -- both id and number should be unique and not null, the idea is that both together make a unique id to be use in our routes. Number should be a hash starting with a letter
  PRIMARY KEY (id, number),
  UNIQUE (id)
);