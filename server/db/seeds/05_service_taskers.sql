INSERT INTO
service_taskers(service_id, tasker_id, hourly_rate)
VALUES
 (1, 7, 15),
 (1, 8, 20),
 (1, 9, 25),
 (1, 10, 30),
 (1, 11, 35),
--  next one is an unavailable tasker, so his hourly rate will not be counted in service_id = 1 (then max will be 35)
 (1, 12, 40),
 (2, 7, 25),
 (2, 10, 30),
 (2, 11, 20),
 (4, 10, 20),
 (4, 12, 25),
 (5, 9, 25),
 (5, 14, 27),
 (5, 12, 29),
 (6, 7, 20),
 (7, 9, 32),
 (8, 7, 40),
 (9, 2, 35);



-- taskers and availability (ids from 7 to 15):
-- available: 7, 8, 9, 11, 13, 14, 15
-- unavailable: 10, 12

-- categories x services:
-- 1: 1-3
-- 2: 4-7
-- 3: 8-9
-- 4: 10-11

-- notes:
-- service 3 will be used to test an empty service (if we don't have taskers willing to do it, it should not show up to users) -- ok
-- service 4 will be used to test a service with only unavailable taskers (if we don't have available taskers, it should not show up to users) -- ok
-- service 9 will be used to test a service provided by a user (not a tasker) (it should not show up to users) -- ok
-- category 4 will be used to test an empty category (if we don't have taskers willing to do it, it should not show up to users)