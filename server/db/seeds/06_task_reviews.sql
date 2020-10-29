INSERT INTO
task_reviews(task_id, user_id, tasker_id, user_comment, user_rating, tasker_comment, tasker_rating)
VALUES
-- first user comment and rating directed to the tasker
 (10, 1, 7, 'By the time I came back, my horse was really relaxed. I am sure John treated him very well. I really recommend his services', 5, 'Communication was easy and I have not had any problems', 5),
 (9, 5, 8, 'Everything was done really carefully and as I wanted. It took a little longer than what I was expected', 4, 'The task was just as described and I did not have any problem to fulfill it', 5),
 (11, 6, 8, 'My dogs had a nice time. I will definitely hire him again', 5, 'Communication was a little confusing', 4),
 (16, 5, 9, 'Everything was delivered as expected', 5, 'Well detailed task', 5),
 (8, 2, 10, 'My bed was slightly damaged', 3, 'When I chatted with Eric, he simplified the task. I had to disassemble the bed to be able to move it', 3),
 (17, 1, 10, 'Just in time! Thanks!', 5, 'Just a regular pick-up. Great communication', 5),
 (15, 4, 11, 'Amazing!! All my friends loved his job', 5, 'Everything went as expected', 5),
 (13, 3, 13, 'Thank you Mario! Amazing job!', 5, 'It was really fun to work for Diana', 5),
 (14, 4, 14, 'Horrible service! It started late and I now can''t find my stuff!', 1, 'The user did not provide the right address and the instructions were unclear', 3),
 (12, 2, 15, 'Just as expected', 5, 'My experience was great. The user gave my clear instructions', 5)

-- user_comment and user_rating is expected to be user input, evaluating the tasker
-- tasker_comment and tasker_rating is expected to be tasker input, evaluating the user

-- Concluded tasks
-- tasks(category, service, description, user_id, tasker_id)
-- 8:  ('House', 'Moving Assitance', 'Moving a bed inside the same building, from apt 1712 to apt 508', 2, 10)
-- 9:  ('House', 'Moving Assitance', 'Transporting living room furniture', 5, 8)
-- 10: ('Pets', 'Pet sitting', 'Taking care of a horse in the morning', 1, 7)
-- 11: ('Pets', 'Pet walking', 'Walking two huskies', 6, 8)
-- 12: ('Pets', 'Pet feeding', 'Feeding some fishes', 2, 15)
-- 13: ('House', 'Plumbing', 'Fixing a kitchen sink leak', 3, 13)
-- 14: ('House', 'Moving Assitance', 'Moving furniture from one house to another', 4, 14)
-- 15: ('Garden', 'Landscaping', 'Organizing a small garden', 4, 11)
-- 16: ('Food', Grocery shopping, 'Buying beverages for a party', 5, 9)
-- 17: ('Food', Food pick-up, 'Burger king picking-up', 1, 10)