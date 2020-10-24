-- users
INSERT INTO
users(first_name, last_name, phone, email, password, address, is_tasker)
VALUES
 ('Hank', 'Ranger', '4161234567', 'hranger@dungeons.com', 'test1', '15 cave street', 'f'),
 ('Eric', 'Cavalier', '6477654321', 'ecavalier@dungeons.com', 'test2', '12 manson road', 'f'),
 ('Diana', 'Acrobat', '7462222222', 'dacrobat@dungeons.com', 'test3', '237 circus street', 'f'),
 ('Presto', 'Magician', '6479999999', 'pmagician@dungeons.com', 'test4', '1 castel wisdom vale', 'f'),
 ('Sheila', 'Thief', '6474567890', 'sthief@dungeons.com', 'test5', 'toronto south detention center, cell2', 'f'),
 ('Bobby', 'Barbarian', '6474567890', 'bbarbarian@dungeons.com', 'test6', 'arreat summit village', 'f');

-- taskers
INSERT INTO
users(first_name, last_name, phone, email, password, address, is_tasker, photo_url, is_available, vehicle)
VALUES
 ('Venger', 'Evil', '4167653112', 'vevil@dragons.com', 'test7', '10 Dragons Graveyard', 't', 'https://miro.medium.com/max/500/0*Fle0WFBFSbQRjS2b.jpg', 't', 'fire dragon'),
 ('Duegon', 'Master', '6477654321', 'dmaster@dragons.com', 'test8', 'cloud mountains no number', 't', 'https://miro.medium.com/max/500/0*3MwGeUV66MiBrm4_.jpg', 't', 'car'),
 ('Tiamat', 'Evil', '6477665421', 'tevil@dragons.com', 'test9', 'cloud mountains no number', 't', 'https://miro.medium.com/max/700/0*qTZK4pvE1enPo14S.jpg', 't', 'bycicle'),
 ('Shadow', 'Demon', '6477654321', 'sdemon@dragons.com', 'test10', 'dark mountains no number', 't', 'https://miro.medium.com/max/500/0*Zr9VJLJld-l8v_Dr.jpg', 'f', 'bycicle'),
 ('Hammer', 'Bros', '4167653112', 'hammer@nintendo.com', 'test11', '123 random street', 't', 'https://www.mariowiki.com/images/e/e3/NSMBU_Hammer_Bro_Artwork.png', 't', 'bicycle'),
 ('Lakitu', 'Koopa', '6477654321', 'lakitu@nintendo.com', 'test12', '123 random street', 't', 'https://upload.wikimedia.org/wikipedia/en/2/2d/Lakitu.png', 'f', 'cloud'),
 ('Mario', 'Bros', '4161234567', 'mario@nintendo.com', 'test13', '123 random street', 't', 'https://images.unsplash.com/photo-1602459816722-ce53719a4987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'kart'),
 ('Luigi', 'Bros', '6477654321', 'luigi@nintendo.com', 'test14', '123 random street', 't', 'https://images.unsplash.com/photo-1542988538-30d8820ec5fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', 't', 'kart'),
 ('Princess', 'Peach', '4162222222', 'peach@nintendo.com', 'test15', '123 random street', 't', 'https://images.unsplash.com/photo-1598021605336-7e9ed0d52efb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 't', 'car');






