INSERT INTO
task_reviews(task_id, user_id, tasker_id, user_comment, user_rating, tasker_comment, tasker_rating)
VALUES
-- first user comment and rating directed to the tasker
 (10, 1, 7, '', 5, '', 5),
 (9, 5, 8, '', 5, '', 5),
 (11, 6, 8, '', 5, '', 5),
 (16, 5, 9, '', 5, '', 5),
 (8, 2, 10, '', 5, '', 5),
 (17, 1, 10, '', 5, '', 5),
 (15, 4, 11, '', 5, '', 5),
 (13, 3, 13, '', 5, '', 5),
 (14, 4, 14, '', 5, '', 5),
 (12, 2, 15, '', 5, '', 5)

-- user_comment and user_rating is expected to be user input, evaluating the tasker
-- tasker_comment and tasker_rating is expected to be tasker input, evaluating the user

-- Concluded tasks
-- tasks(category, service, description, user_id, tasker_id)
-- 8: ('House', 'Moving Assitance', 'Moving a bed inside the same building, from apt 1712 to apt 508', 2, 10),
-- 9: ('House', 'Moving Assitance', 'Transporting living room furniture', 5, 8),
-- 10: ('Pets', 'Pet sitting', 'Taking care of a horse in the morning', 1, 7),
-- 11: ('Pets', 'Pet walking', 'Walking two huskies', 6, 8),
-- 12: ('Pets', 'Pet feeding', 'Feeding some fishes', 2, 15),
-- 13: ('House', 'Plumbing', 'Fixing a kitchen sink leak', 3, 13),
-- 14: ('House', 'Moving Assitance', 'Moving furniture from one house to another', 4, 14),
-- 15: ('Garden', 'Landscaping', 'Organizing a small garden', 4, 11),
-- 16: ('Food', Grocery shopping, 'Buying beverages for a party', 5, 9),
-- 17: ('Food', Food pick-up, 'Burger king picking-up', 1, 10);