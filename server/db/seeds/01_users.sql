-- users (ids: 1-6)
INSERT INTO
users(first_name, last_name, phone, email, password, address, is_tasker)
VALUES
 ('Daniel', 'Abreu', '4161234567', 'dabreu@email.com', 'password1', '100 Queen St W, Toronto', 'f'),
 ('Eric', 'Clinton', '6477654321', 'eclinton@email.com', 'password2', '1 Austin Terrace, Toronto', 'f'),
 ('Diana', 'Gibbons', '7462222222', 'diana@email.com', 'password3', '1 Dundas St E, Toronto', 'f'),
 ('Richard', 'Nakoolak', '6479999999', 'richard@email.com', 'password4', '2 Bloor St E, Toronto', 'f'),
 ('Sheila', 'Souza', '6474567890', 'ss@email.com', 'password5', '1 Canada''s Wonderland Drive, Vaughan', 'f'),
 ('Carlos', 'Richmond', '6474567890', 'cr@email.com', 'password6', '2000 Meadowvale Rd, Toronto', 'f');

-- taskers (ids: 7-15)
INSERT INTO
users(first_name, last_name, phone, email, password, address, is_tasker, photo_url, is_available, vehicle)
VALUES
 ('John', 'Smith', '4167653112', 'johns@email.com', 'password7', '290 Bremner Blvd, Toronto', 't', 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'car'),
 ('Diana', 'Philips', '6477654321', 'diana@email.com', 'password8', '6301 Silver Dart Dr, Mississauga', 't', 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'car'),
 ('Cameron', 'Rutherford', '6477665421', 'cameron@email.com', 'password9', '662 King St W, Toronto', 't', 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'van'),
 ('Cristina', 'Button', '6477654321', 'chris@email.com', 'password10', '288 Bremner Blvd, Toronto', 't', 'https://images.unsplash.com/photo-1595026530842-ccc7d3f71723?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'bicycle'),
 ('Elizabeth', 'Sinatra', '4167653112', 'alfred@email.com', 'password11', '789 Yonge St, Toronto', 't', 'https://images.unsplash.com/photo-1552101264-e35e17f3c046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'bicycle'),
 ('Gilbert', 'Stace', '6477654321', 'gilbert@email.com', 'password12', '200 Bay St, Toronto,', 't', 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'truck'),
 ('Mario', 'Bros', '4161234567', 'mario@email.com', 'password13', '40 Bay St, Toronto', 't', 'https://images.unsplash.com/photo-1602459816722-ce53719a4987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'public'),
 ('Steven', 'Garcia', '6477654321', 'steven@email.com', 'password14', '60 Carl Hall Rd, North York', 't', 'https://images.unsplash.com/photo-1553946550-4b8f3eea5451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'motorcycle'),
 ('Antony', 'Cooper', '4162222222', 'antony@email.com', 'password15', '1 Blue Jays Way, Toronto', 't', 'https://images.unsplash.com/photo-1548535537-3cfaf1fc327c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'bicycle');

-- new taskers (ids 16-36)
 INSERT INTO
users(first_name, last_name, phone, email, password, address, is_tasker, photo_url, is_available, vehicle)
VALUES
('Richard',	'Williams',	'6471234567',	'r.williams@email.com',	'password16',	'100 Queen''s Park, Toronto',	't',	'https://images.unsplash.com/photo-1555084227-36e282495e1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'car'),
('Robert',	'Jones',	'6471234568',	'r.jones@email.com',	'password17',	'317 Dundas Street West',	't',	'https://images.unsplash.com/flagged/photo-1572262107271-baad9a8c8709?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'bicycle'),
('John',	'Doe',	'6471234569',	'j.doe@email.com',	'password18',	'92 Front Street East, Toronto',	't',	'https://images.unsplash.com/photo-1536792414922-14b978901fcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'truck'),
('Steven',	'Brown',	'6471234570',	's.brown@email.com',	'password19',	'1873 Bloor Street West, Toronto',	't',	'https://images.unsplash.com/photo-1473655587843-eda8944061e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'van'),
('Ken',	'Haley',	'6471234571',	'k.haley@email.com',	'password20',	'5 Donlands Avenue, Toronto',	't',	'https://images.unsplash.com/photo-1528408733941-a19e0e619492?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'motorcycle'),
('Anna',	'Costa',	'6471234572',	'a.costa@email.com',	'password21',	'501 St Clair Avenue West, Toronto',	't',	'https://images.unsplash.com/photo-1517336277864-8c02f49ef022?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'motorcycle'),
('Monica',	'Lee',	'6471234573',	'm.lee@email.com',	'password22',	'50 Alexander Street, Toronto',	't',	'https://images.unsplash.com/photo-1509335035496-c47fc836517f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'public'),
('Eddie',	'Mercury',	'6471234574',	'e.mercury@email.com',	'password23',	'22 Leader Lane, Toronto',	't',	'https://images.unsplash.com/photo-1506268380-e97dbfd5e51f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'car'),
('Maria', 	'Soares',	'6471234575',	'm.soares@email.com',	'password24',	'5 Greystone Walk Drive, Scarborough',	't',	'https://images.unsplash.com/photo-1536317203120-03881cb89d41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'car'),
('Mathew',	'Sender',	'6471234576',	'm.sender@email.com',	'password25',	'310 Lonsdale Road, Toronto',	't',	'https://images.unsplash.com/photo-1505247964246-1f0a90443c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'van'),
('Lia',	'Kim',	'6471234577',	'l.kim@email.com',	'password26',	'31 Jennings Avenue, Toronto',	't',	'https://images.unsplash.com/photo-1582686567861-3d01ff2f495e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'motorcycle'),
('Catarina',	'Stuart',	'6471234578',	'c.stuart@email.com',	'password27',	'2515 Bathurst Street, Toronto',	't',	'https://images.unsplash.com/photo-1515463892140-58a22e37ff72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'public'),
('Stephanie',	'Gerrard',	'6471234579',	's.gerrard@email.com',	'password28',	'20 Shore Breeze Drive, Etobicoke',	't',	'https://images.unsplash.com/photo-1523983254932-c7e6571c9d60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'car'),
('Amelia',	'Naliupo',	'6471234580',	'a.naliupo@email.com',	'password29',	'77 Keewatin Ave, Toronto',	't',	'https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'bicycle'),
('Michael',	'Johnson',	'6471234581',	'm.johnson@email.com',	'password30',	'75 Silver Springs Boulevard, Scarborough',	't',	'https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'truck'),
('Jose',	'Gonzales',	'6471234582',	'j.gonzales@email.com',	'password31',	'18 Skipton Court, North York',	't',	'https://images.unsplash.com/photo-1532318065232-2ba7c6676cd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'van'),
('Britney',	'MacCarten',	'6471234583',	'b.maccarten@email.com',	'password32',	'14 Chatsworth Drive, Toronto',	't',	'https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'van'),
('Alex',	'Barros',	'6471234584',	'a.barros@email.com',	'password33',	'2928 Yonge Street, Toronto',	't',	'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'bicycle'),
('Carmem',	'Alvarez',	'6471234585',	'c.alvarez@email.com',	'password34',	'77 Davisville Avenue, Toronto',	't',	'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'car'),
('James',	'Jackson',	'6471234586',	'j.jackson@email.com',	'password35',	'327 Nairn Avenue, York',	't',	'https://images.unsplash.com/photo-1535162777965-1304efc8c6dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'car'),
('Georgia',	'Blake',	'6471234587',	'g.blake@email.com',	'password36',	'19 Western Battery Road, Toronto',	't',	'https://images.unsplash.com/photo-1530577197743-7adf14294584?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',	't',	'truck');
