-- Coming tasks
INSERT INTO
tasks(number, category_id, service_id, description, estimated_duration, start_time, start_location, end_location, user_id, tasker_id)
VALUES
(1,1,2, 'Walking my pet for 2 hours in downtown', 2, now(), '15 cave street', '15 cave street', 1, 7),
(2,2,4, 'Painting the living room and kitchen', 5, now(), '1 castel wisdom vale', '1 castel wisdom vale', 4, 15),
(3,2,6, 'Changing light bulbs from the bathroom', 1, now(), '12 manson road', '12 manson road', 2, 12),
(4,3,9, 'Watering my sunflowers', 1, now(), 'toronto south detention center, cell2', 'toronto south detention center, cell2', 5, 10),
(5,4,11, 'Picking-up an order at McDonalds', 2, now(), '15 cave street', '15 cave street', 6, 7);


-- Canceled tasks
INSERT INTO
tasks(number, category_id, service_id, description, estimated_duration, start_time, start_location, end_location, cancelled_at, user_id, tasker_id)
VALUES
(6,1,3, 'Feeding a cat 2 times per day', 4, now(), '15 cave street', '15 cave street', now(), 1, 8),
(7,2,7, 'Moving some boxes to another city', 12, now(), 'arreat summit village', 'white house', now(), 6, 13);


-- Concluded tasks
INSERT INTO
tasks(number, category_id, service_id, description, estimated_duration, start_time, start_location, end_location, started_at, completed_at, user_id, tasker_id)
VALUES
(8,2,7, 'Moving a bed inside the same building, from apt 1712 to apt 508', 1, '2020-10-22 09:00:00', '12 manson road', '12 manson road', '09:00:00', '10:00:00', 2, 10),
-- a example that took more than expected (5 instead of 4 hours):
(9,2,7, 'Transporting living room furniture', 4, '2020-10-22 08:00:00', 'Ikea front shopping window', 'toronto south detention center, cell2', '08:00:00', '13:00:00', 5, 8),
(10,1,1, 'Taking care of a horse in the morning', 4, '2020-10-22 12:00:00', '15 cave street', '15 cave street', '12:00:00', '16:00:00', 1, 7),
(11,1,2, 'Walking two huskies', 4, '2020-10-22 10:00:00', 'arreat summit village', 'arreat summit village', '10:00:00', '14:00:00', 6, 8),
(12,1,3, 'Feeding some fishes', 1, '2020-10-22 09:00:00', '12 manson road', '12 manson road', '09:00:00', '10:00:00', 2, 15),
(13,2,5, 'Fixing a kitchen sink leak', 1, '2020-10-22 09:00:00', '237 circus street', '237 circus street', '09:00:00', '10:00:00', 3, 13),
-- a example that started late (5pm instead of 3pm):
(14,2,7, 'Moving furniture from one house to another', 2, '2020-10-22 15:00:00', '1 castel wisdom vale', '1 castel wisdom vale', '17:00:00', '19:00:00', 4, 14),
(15,3,8, 'Organizing a small garden', 2, '2020-10-22 13:00:00', '1 castel wisdom vale', '1 castel wisdom vale', '13:00:00', '15:00:00', 4, 11),
(16,4,10, 'Buying beverages for a party', 2, '2020-10-22 08:00:00', 'toronto south detention center, cell2', 'toronto south detention center, cell2', '08:00:00', '10:00:00', 5, 9),
-- a example that was faster than expected:
(17,4,11, 'Burger king pick-up', 2, '2020-10-22 09:00:00', '100 Queen St W, Toronto', '100 Queen St W, Toronto', '09:00:00', '09:45:00', 1, 10),
(18,4,11, 'Pizza Hut pick-up', 2, '2020-10-23 09:00:00', '1 Austin Terrace, Toronto', '1 Austin Terrace, Toronto', '09:00:00', '11:00:00', 2, 10),
(19,4,11, 'Dominos Hut pick-up', 2, '2020-10-24 09:00:00', '1 Dundas St E, Toronto', '1 Dundas St E, Toronto', '09:00:00', '11:00:00', 3, 10);