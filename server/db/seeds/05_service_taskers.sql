INSERT INTO
service_taskers(service_id, tasker_id, hourly_rate)
VALUES
 (1, 7, 1550),
 (1, 8, 2000),
 (1, 9, 2500),
 (1, 10, 3000),
 (1, 11, 3500),
 (1, 12, 1600),
 (2, 7, 2500),
 (2, 8, 2800),
 (2, 10, 3000),
 (2, 11, 2000),
 (3, 15, 2000),
 (4, 10, 2000),
 (4, 12, 2500),
 (5, 9, 2500),
 (5, 14, 2700),
 (5, 12, 2900),
 (5, 13, 3100),
 (7, 9, 3200),
 (7, 8, 3300),
 (7, 10, 3400),
 (7, 14, 3500),
 (8, 7, 4000),
 (8, 11, 4000),
 (9, 2, 3500),
 (10, 9, 3100),
 (11, 10, 3500),
 (12, 24, 2000),
 (9, 17, 2200),
 (6, 7, 2300),
 (24, 35, 2200),
 (25, 35, 2200),
 (21, 27, 2500),
 (22, 27, 2500),
 (13, 32, 3000),
 (14, 32, 3000),
 (15, 32, 3000),
 (17, 19, 2150),
 (18, 19, 2150),
 (19, 19, 2150),
 (20, 19, 2150);

-- taskers and availability (ids from 7 to 15):
-- available: 7, 8, 9, 11, 13, 14, 15
-- unavailable: 10, 12

-- categories x services:
-- 1: 1-3
-- 2: 4-7
-- 3: 8-9
-- 4: 10-11

-- notes:
-- service 4 will be used to test a service with only unavailable taskers (if we don't have available taskers, it should not show up to users) -- ok
-- service 6 will be used to test an empty service (if we don't have taskers willing to do it, it should not show up to users) -- ok
-- service 9 will be used to test a service provided by a user (not a tasker) (it should not show up to users) -- ok


-- comment this out after changing the taskers display (I am making every body available for service number 1 to work with the layout)
INSERT INTO
service_taskers(service_id, tasker_id, hourly_rate)
VALUES
 (1, 13, 2800),
 (1, 14, 1700),
 (1, 15, 1850),
 (1, 16, 2300),
 (1, 17, 3200),
 (1, 18, 1700),
 (1, 19, 2500),
 (1, 20, 1599),
 (1, 21, 2200),
 (1, 22, 1800),
 (1, 23, 4250),
 (1, 24, 3800),
 (1, 25, 1900),
 (1, 26, 2700),
 (1, 27, 4200),
 (1, 28, 2900),
 (1, 29, 2100),
 (1, 30, 1650),
 (1, 31, 1520),
 (1, 32, 3200),
 (1, 33, 2700),
 (1, 34, 1850),
 (1, 35, 1920),
 (1, 36, 3200);


 -- web development (ids from 37 to ???)

INSERT INTO
service_taskers(service_id, tasker_id, hourly_rate)
VALUES
-- LHL
 (23, 37, 2300),
 (23, 38, 2300),
 (23, 39, 2300),
 (23, 40, 2300),
 (23, 41, 2300),

--  other taskers (7, 21-29)
 (23, 10, 1900),
 (23, 21, 2100),
 (23, 22, 1800),
 (23, 23, 2000),
 (23, 24, 1900),
 (23, 25, 1850),
 (23, 26, 2050),
 (23, 27, 2000),
 (23, 28, 2150),
 (23, 29, 2250);

--  (23, tasker_id, hourly_rate),