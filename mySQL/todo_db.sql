DROP TABLE IF EXISTS todo;
CREATE TABLE todo (
todo_uuid VARCHAR(36),
todo_todo VARCHAR(200),
todo_createdDate VARCHAR(200),
todo_dueDate VARCHAR(200)
);

INSERT INTO todo
VALUES ('6773c8df-7b7e-4584-95a5-9303b1cf109b', 'Go Climbing', '2022-02-15T19:18:40.697Z', '2022-05-01T12:45:00.000Z');