-- Coming tasks
INSERT INTO
tasks(number, category_id, service_id, description, estimated_duration, start_time, start_location, end_location, user_id, tasker_id)
VALUES
(1,1,1, 'Walking 2 hours with a pig pet in downtown', 2, now(), '15 cave street', '15 cave street', 1, 7),
(2,2,4, 'Painting the living room and kitchen', 5, now(), '1 castel wisdom vale', '1 castel wisdom vale', 4, 15),
(3,2,6, 'Changing light bulbs from the bathroom', 1, now(), '12 manson road', '12 manson road', 2, 12),
(4,3,8, 'Watering a sunflower', 1, now(), 'toronto south detention center, cell2', 'toronto south detention center, cell2', 5, 10),
(5,4,11, 'Picking-up a cheese burguer at McDonalds using a discount cupom to feed a pony ', 2, now(), '15 cave street', '15 cave street', 6, 7);


-- Canceled tasks
INSERT INTO
tasks(number, category_id, service_id, description, estimated_duration, start_time, start_location, end_location, cancelled_at, user_id, tasker_id)
VALUES
(6,1,3, 'Feeding a fat cat 8 times per day', 4, now(), '15 cave street', '15 cave street', now(), 1, 8),
(7,2,7, 'Moving battle clave to another city', 12, now(), 'arreat summit village', 'white house', now(), 6, 13);


-- Concluded tasks
INSERT INTO
tasks(number, category_id, service_id, description, estimated_duration, start_time, start_location, end_location, completed_at, user_id, tasker_id)
VALUES
(8,2,7, 'Moving a bed inside the same building, from apt 1712 to apt 508', 1, now(), '12 manson road', '12 manson road', now(), 2, 10),
(9,2,7, 'Transporting living room forniture', 4, now(), 'Ikea front shopping window', 'toronto south detention center, cell2', now(), 5, 8),
(10,1,1, 'Taking care of a horsing during a morning', 4, now(), '15 cave street', '15 cave street', now(), 1, 7),
(11,1,2, 'Walking with lions and tigers during the winter', 4, now(), 'arreat summit village', 'arreat summit village', now(), 6, 8),
(12,1,3, 'Feeding a lion with your leg', 1, now(), '12 manson road', '12 manson road', now(), 2, 15),
(13,2,5, 'Fixing a kitchen sink leak ', 1, now(), '237 circus street', '237 circus street', now(), 3, 13),
(14,2,7, 'Moving fortinures from one castle tower to another', 2, now(), '1 castel wisdom vale', '1 castel wisdom vale', now(), 4, 14),
(15,3,8, 'Organizing a whole garden', 2, now(), '1 castel wisdom vale', '1 castel wisdom vale', now(), 4, 11),
(16,4,10, 'Buying alchool for a party', 2, now(), 'toronto south detention center, cell2', 'toronto south detention center, cell2', now(), 5, 9),
(17,4,11, 'Burguer king picking-up', 2, now(), '15 cave street', '15 cave street', now(), 1, 10);




  
  

