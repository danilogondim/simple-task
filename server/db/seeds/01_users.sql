-- users (ids: 1-6)
INSERT INTO
users(first_name, last_name, phone, email, password, address, is_tasker)
VALUES
 ('Daniel', 'Abreu', '4161234567', 'dabreu@email.com', 'test1', '100 Queen St W, Toronto', 'f'),
 ('Eric', 'Clinton', '6477654321', 'eclinton@email.com', 'test2', '1 Austin Terrace, Toronto', 'f'),
 ('Diana', 'Gibbons', '7462222222', 'diana@email.com', 'test3', '1 Dundas St E, Toronto', 'f'),
 ('Richard', 'Nakoolak', '6479999999', 'richard@email.com', 'test4', '2 Bloor St E, Toronto', 'f'),
 ('Sheila', 'Souza', '6474567890', 'ss@email.com', 'test5', '1 Canada''s Wonderland Drive, Vaughan', 'f'),
 ('Carlos', 'Richmond', '6474567890', 'cr@email.com', 'test6', '2000 Meadowvale Rd, Toronto', 'f');

-- taskers (ids: 7-15)
INSERT INTO
users(first_name, last_name, phone, email, password, address, is_tasker, photo_url, is_available, vehicle)
VALUES
 ('John', 'Smith', '4167653112', 'johns@email.com', 'test7', '290 Bremner Blvd, Toronto', 't', 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'car'),
 ('Diana', 'Philips', '6477654321', 'diana@email.com', 'test8', '6301 Silver Dart Dr, Mississauga', 't', 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'car'),
 ('Cameron', 'Rutherford', '6477665421', 'cameron@email.com', 'test9', '662 King St W, Toronto', 't', 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'van'),
 ('Cristina', 'Button', '6477654321', 'chris@email.com', 'test10', '288 Bremner Blvd, Toronto', 't', 'https://images.unsplash.com/photo-1595026530842-ccc7d3f71723?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'f', 'bicycle'),
 ('Elizabeth', 'Sinatra', '4167653112', 'alfred@email.com', 'test11', '789 Yonge St, Toronto', 't', 'https://images.unsplash.com/photo-1552101264-e35e17f3c046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'bicycle'),
 ('Gilbert', 'Stace', '6477654321', 'gilbert@email.com', 'test12', '200 Bay St, Toronto,', 't', 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'f', 'truck'),
 ('Mario', 'Bros', '4161234567', 'mario@email.com', 'test13', '40 Bay St, Toronto', 't', 'https://images.unsplash.com/photo-1602459816722-ce53719a4987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'public'),
 ('Steven', 'Garcia', '6477654321', 'steven@email.com', 'test14', '60 Carl Hall Rd, North York', 't', 'https://images.unsplash.com/photo-1553946550-4b8f3eea5451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'motorcycle'),
 ('Antony', 'Cooper', '4162222222', 'antony@email.com', 'test15', '1 Blue Jays Way, Toronto', 't', 'https://images.unsplash.com/photo-1548535537-3cfaf1fc327c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'bicycle');