-- Pets (ids: 1-3)
INSERT INTO
services(name, description, category_id, thumbnail_photo_url)
VALUES
 ('Pet Sitting','Let someone look after your beloved pets and enjoy your free time!',1,'https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'),
 ('Pet Walking', 'Tough day? Let us help you with your pets'' needs!',1,'https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
 ('Pet Feeding','Do you want to keep your pet at home while you are travelling? This service is definitely for you!',1,'https://images.unsplash.com/photo-1580238169544-86bf7cd8c84c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');

-- House (ids: 4-7)
INSERT INTO
services(name, description, category_id, thumbnail_photo_url)
VALUES
 ('Painting','Do you need a hand to paint your house? We got you covered!',2,'https://images.unsplash.com/photo-1573753458526-f353a3cc0aac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'),
 ('Plumbing','For who hates dripping noise...',2,'https://images.unsplash.com/photo-1553265381-674034b34554?ixlib=rb-1.2.1&auto=format&fit=crop&w=1445&q=80'),
 ('Electric Services','Afraid of electricity?',2,'https://images.unsplash.com/photo-1440595228939-3673bdb622b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'),
-- move to Transporation (cat 5)
 ('Moving Assistance','Hire a professional to handle your moving! You will thank us latter...',5,'https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');


-- Garden (ids: 8-9)
INSERT INTO
services(name, description, category_id, thumbnail_photo_url)
VALUES
 ('Landscaping','Your garden will never be the same!',3,'https://images.unsplash.com/photo-1524247108137-732e0f642303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'),
 ('Showering Flowers','Let a specialist water your plants and have amazing results!',3,'https://images.unsplash.com/photo-1494007485290-ce668e189d92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60');


-- Food (ids: 10-11)
INSERT INTO
services(name, description, category_id, thumbnail_photo_url)
VALUES
 ('Grocery Shopping','Without time to grocery shopping? Our professionals are here to help!',4,'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'),
-- Change name, description and move to Transporation (cat 5)
 ('Delivery & Pick-up','From fast food to mail, we deliver what you need!',5,'https://images.unsplash.com/photo-1574641264510-d656942d6380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1065&q=80');

-- Transportation (ids: 7, 11, 12)
INSERT INTO
services(name, description, category_id, thumbnail_photo_url)
VALUES
 ('Personal Driver','Need a ride? Let me get you where you need to be! From the airport to a party, let us help you.',5,'https://images.unsplash.com/photo-1601234699305-4771c7949491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');

-- Events (ids: 13-16)
INSERT INTO
services(name, description, category_id, thumbnail_photo_url)
VALUES
('Photographer',	'Your best moments registered forever',	6,	'https://images.unsplash.com/photo-1552266080-9db174b37b88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
('Catering Services',	'Tell us what you need for your party and we can get it all for you! Food & Drinks',	6,	'https://images.unsplash.com/photo-1561912774-79769a0a0a7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
('Décor Services',	'Event design to make your party stand out and be unforgettable!', 6,	'https://images.unsplash.com/photo-1561185340-92902836cf7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
('Entertainment',	'Whether you need a Band, DJ or entertain your kids. Here you will find it!',	6,	'https://images.unsplash.com/photo-1569634311433-afb9edb8a3f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');

-- Cleaning (ids: 17-20)
INSERT INTO
services(name, description, category_id, thumbnail_photo_url)
VALUES
('House Cleaning',	'Light or deep cleaning, you state it! May include windows and basement, just ask our taskers!',	7,	'https://images.unsplash.com/flagged/photo-1560532886-43f59bee690d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
('Construction Cleaning',	'Just finished a renovation and don''t know how to deal with all the dust and rubbish? We have the solution for you!',	7,	'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
('After Events',	'Enjoy your party and don''t worry about cleaning the mess your friends left behind!',	7,	'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
('Office Cleaning',	'Have your office sparkling clean and disinfected!',	7,	'https://images.unsplash.com/photo-1498409785966-ab341407de6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');

-- General Services (ids 21-22)
INSERT INTO
services(name, description, category_id, thumbnail_photo_url)
VALUES
('Virtual Assistant',	'Need help organizing your day? Have some repetitive tasks you need help with? We have you covered!',	8,	'https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
('Research Assistant',	'Get help filtering the internet information you need for your project!',	8,	'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');


-- Information Technology (ids 23-25)
INSERT INTO
services(name, description, category_id, thumbnail_photo_url)
VALUES
('Web Development', 'Do you need a full-stack website? A new feature? Would you like a code review or pair programming? Click here!', 9, 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
('Data Science', 'Drowning in data? Would like some meaningful insights and reports?', 9, 'https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
('Computer Assembling', 'Looking for a computer upgrade? Maybe a new computer? Of course we can do it!', 9, 'https://images.unsplash.com/photo-1579061201641-1e98ff03f7b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');