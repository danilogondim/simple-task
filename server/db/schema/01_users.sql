DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  coordinates VARCHAR[],
  is_tasker BOOLEAN DEFAULT 'f',
  photo_url TEXT,
  is_available BOOLEAN,
  vehicle VARCHAR(255),
  -- if the user is a tasker, it should have photo, availability (true or false) and vehicle:
  CONSTRAINT if_tasker_then_photo_url_is_not_null 
    CHECK ( NOT (is_tasker AND photo_url IS NULL) ),

  CONSTRAINT if_tasker_then_is_available_is_not_null 
    CHECK ( NOT (is_tasker AND is_available IS NULL) ),

  CONSTRAINT if_tasker_then_vehicle_is_not_null 
    CHECK ( NOT (is_tasker AND vehicle IS NULL) )
);