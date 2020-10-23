DROP TABLE IF EXISTS service_taskers CASCADE;
CREATE TABLE service_taskers (
  service_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
  tasker_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  -- expect the rate to be passed as cents (15.50 should be passed as 1550)
  hourly_rate INTEGER NOT NULL,
  PRIMARY KEY (service_id, tasker_id)
);