-- users
INSERT INTO
users(first_name, last_name, phone, email, password, address)
VALUES
 ('Mario', 'Bros', '4161234567', 'mario@nintendo.com', 'test', '123 random street'),
 ('Luigi', 'Bros', '6477654321', 'luigi@nintendo.com', 'test', '123 random street'),
 ('Princess', 'Peach', '4162222222', 'peach@nintendo.com', 'test', '123 random street'),
 ('Princess', 'Daisy', '6479999999', 'daisy@nintendo.com', 'test', '123 random street' ),
 ('Donkey', 'Kong', '6474567890', 'donkey@nintendo.com', 'test', '123 random street');

-- taskers
INSERT INTO
users(first_name, last_name, phone, email, password, address, is_tasker, photo_url, is_available, vehicle)
VALUES
 ('Hammer', 'Bros', '4167653112', 'hammer@nintendo.com', 'test', '123 random street', 't', 'https://www.mariowiki.com/images/e/e3/NSMBU_Hammer_Bro_Artwork.png', 't', 'bicycle'),
 ('Lakitu', 'Koopa', '6477654321', 'lakitu@nintendo.com', 'test', '123 random street', 't', 'https://upload.wikimedia.org/wikipedia/en/2/2d/Lakitu.png', 'f', 'cloud');