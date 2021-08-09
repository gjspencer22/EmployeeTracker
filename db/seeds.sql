USE business;


INSERT INTO employees(id, first_name, last_name)
VALUES
(1, 'test', 'Garrett'),
(2, 'Kobe', 'Bryant'),
(3, 'Babe', 'Ruth'),
(4, 'Penny', 'Hardaway'),
(5,'Jack', 'Sparrow');

INSERT INTO department(name)
VALUES 
('Meat'),
('Dairy'),
('GM'),
('Grocery'),
('Reciving');

INSERT INTO roles(title, salary, department_id)
VALUES
('Meat Manager', 100000, 1),
('Dairy Manager', 67000, 2),
('GM Manager', 72000, 3),
('Reciver', 45000, 4),
('Grocery Manager', 47000, 5);

