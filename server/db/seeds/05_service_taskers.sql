INSERT INTO
service_taskers(service_id, tasker_id, hourly_rate)
VALUES
 (1,7,5),
 (1,8,10),
 (1,9,15),
 (1,10,20),
 (1,11,25),
--  next one is an unavailable tasker, so his hourly rate will not be counted in service_id = 1 (then max will be 25)
 (1,12,30),
 (2,7,15);