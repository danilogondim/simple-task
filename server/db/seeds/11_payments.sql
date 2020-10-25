INSERT INTO
payments(task_id, user_id, tasker_id, subtotal, discount, comission, tax, total, confirmed_at, confirmation_code)
VALUES
 (8, 2, 10, 3400, 0, 3400*.1, 3400*1.1*0.13, 3400*1.1*1.13, now(), 'V3Ry5eCr3tK3i'),
-- a case that took longer than expected and that the tasker decided to give a discount:
 (9, 5, 8, 16500, 1500, 16500*.1, (16500*1.1-1500)*0.13, (16500*1.1-1500)*1.13, now(), 'V3Ry5eCr3tK3i'),
 (10, 1, 7, 6000, 0, 6000*.1, 6000*1.1*0.13, 6000*1.1*1.13, now(), 'V3Ry5eCr3tK3i'),
 (11, 6, 8, 11200, 0, 11200*.1, 11200*1.1*0.13, 11200*1.1*1.13, now(), 'V3Ry5eCr3tK3i'),
 (12, 2, 15, 2000, 0, 2000*.1, 2000*1.1*0.13, 2000*1.1*1.13, now(), 'V3Ry5eCr3tK3i'),
 (13, 3, 13, 3100, 0, 3100*.1, 3100*1.1*0.13, 3100*1.1*1.13, now(), 'V3Ry5eCr3tK3i'),
 (14, 4, 14, 7000, 0, 7000*.1, 7000*1.1*0.13, 7000*1.1*1.13, now(), 'V3Ry5eCr3tK3i'),
 (15, 4, 11, 8000, 0, 8000*.1, 8000*1.1*0.13, 8000*1.1*1.13, now(), 'V3Ry5eCr3tK3i'),
 (16, 5, 9, 6200, 0, 6200*.1, 6200*1.1*0.13, 6200*1.1*1.13, now(), 'V3Ry5eCr3tK3i'),
-- a case where we have float hours (0.75 hour):
 (17, 1, 10, 0.75*3500, 0, 0.75*3500*.1, 0.75*3500*1.1*0.13, 0.75*3500*1.1*1.13, now(), 'V3Ry5eCr3tK3i');

-- Concluded tasks
-- tasks(service_id, estimated_duration, started_at, completed_at, user_id, tasker_id, hourly_rate

-- 8: 7, 1, '09:00:00', '10:00:00', 2, 10, 3400

-- a example that took more than expected (5 instead of 4 hours):
-- 9: 7, 4, '08:00:00', '13:00:00', 5, 8, 3300
-- 10: 1, 4, '12:00:00', '16:00:00', 1, 7, 1500
-- 11: 2, 4, '10:00:00', '14:00:00', 6, 8, 2800
-- 12: 3, 1, '09:00:00', '10:00:00', 2, 15, 2000
-- 13: 5, 1, '09:00:00', '10:00:00', 3, 13, 3100

-- a example that started late (5pm instead of 3pm):
-- 14: 7, 2, '17:00:00', '19:00:00', 4, 14, 3500
-- 15: 8, 2, '13:00:00', '15:00:00', 4, 11, 4000
-- 16: 10, 2, '08:00:00', '10:00:00', 5, 9, 3100

-- a example that was faster than expected:
-- 17: 11, 2, '09:00:00', '09:45:00', 1, 10, 3500



--subtotal....hours x hourly_rate....................1 x 3400................34.000
--discount....tasker_input...........................1000....................10.000
--commission..10% of subtotal........................0.10 x 3400..............3.400
--tax.........13% of (subtotal-discount+commission)..0.13 x 2740..............3.562
--total.......subtotal-discount+ commission+tax......3400 -1000+ 340+356.2...30.962 -> user will have to pay this value