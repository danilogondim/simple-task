INSERT INTO
service_taskers(service_id, tasker_id, hourly_rate)
VALUES
 (1, 7, 1500),
 (1, 8, 2000),
 (1, 9, 2500),
 (1, 10, 3000),
 (1, 11, 3500),
--  next one is an unavailable tasker, so his hourly rate will not be counted in service_id = 1 (then max will be 3500)
 (1, 12, 4000),
 (2, 7, 2500),
 (2, 10, 3000),
 (2, 11, 2000),
 (4, 10, 2000),
 (4, 12, 2500),
 (5, 9, 2500),
 (5, 14, 2700),
 (5, 12, 2900),
 (6, 7, 2000),
 (7, 9, 3200),
 (8, 7, 4000),
 (9, 2, 3500);

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