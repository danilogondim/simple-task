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
 ('John', 'Smith', '4167653112', 'johns@email.com', 'test7', '290 Bremner Blvd, Toronto', 't', 'https://miro.medium.com/max/500/0*Fle0WFBFSbQRjS2b.jpg', 't', 'car'),
 ('Robert', 'Master', '6477654321', 'robert@email.com', 'test8', '6301 Silver Dart Dr, Mississauga', 't', 'https://miro.medium.com/max/500/0*3MwGeUV66MiBrm4_.jpg', 't', 'car'),
 ('Cameron', 'Rutherford', '6477665421', 'cameron@email.com', 'test9', '662 King St W, Toronto', 't', 'https://miro.medium.com/max/700/0*qTZK4pvE1enPo14S.jpg', 't', 'bicycle'),
 ('Cristian', 'Button', '6477654321', 'chris@email.com', 'test10', '288 Bremner Blvd, Toronto', 't', 'https://miro.medium.com/max/500/0*Zr9VJLJld-l8v_Dr.jpg', 'f', 'bicycle'),
 ('Alfred', 'Sinatra', '4167653112', 'alfred@email.com', 'test11', '789 Yonge St, Toronto', 't', 'https://www.mariowiki.com/images/e/e3/NSMBU_Hammer_Bro_Artwork.png', 't', 'bicycle'),
 ('Gilbert', 'Stace', '6477654321', 'gilbert@email.com', 'test12', '200 Bay St, Toronto,', 't', 'https://upload.wikimedia.org/wikipedia/en/2/2d/Lakitu.png', 'f', 'truck'),
 ('Mario', 'Bros', '4161234567', 'mario@email.com', 'test13', '40 Bay St, Toronto', 't', 'https://images.unsplash.com/photo-1602459816722-ce53719a4987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'car'),
 ('Luigi', 'Bros', '6477654321', 'luigi@email.com', 'test14', '60 Carl Hall Rd, North York', 't', 'https://images.unsplash.com/photo-1542988538-30d8820ec5fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', 't', 'car'),
 ('Antony', 'Cooper', '4162222222', 'antony@email.com', 'test15', '1 Blue Jays Way, Toronto', 't', 'https://images.unsplash.com/photo-1598021605336-7e9ed0d52efb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'car');