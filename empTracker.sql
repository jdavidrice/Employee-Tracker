SET SQL_SAFE_UPDATES = 0;
DROP DATABASE IF EXISTS empTracker_db;
CREATE DATABASE empTracker_db;

USE empTracker_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  department_name VARCHAR(50)
);
 
CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT
);

INSERT INTO department (id, department_name) values (1, "Internet Software and Services");
INSERT INTO department (id, department_name) values (2, "Software Engineering");
INSERT INTO department (id, department_name) values (3, "Hardware Engineering");
INSERT INTO department (id, department_name) values (4, "Machine Learning and AI Strategy");
INSERT INTO department (id, department_name) values (5, "Worldwide Marketing");
INSERT INTO department (id, department_name) values (6, "Operations");


INSERT INTO role (id, title, salary, department_id) values (1, "Engineer", 1000500, 1);
INSERT INTO role (id, title, salary, department_id) values (2, "Engineer", 1000000, 2);
INSERT INTO role (id, title, salary, department_id) values (3, "Engineer", 1000000, 3);
INSERT INTO role (id, title, salary, department_id) values (4, "Engineer", 1000000, 4);
INSERT INTO role (id, title, salary, department_id) values (5, "Engineer", 1000000, 5);
INSERT INTO role (id, title, salary, department_id) values (6, "Engineer", 1000000, 6);
INSERT INTO role (id, title, salary, department_id) values (7, "Manager", 500000, 1);
INSERT INTO role (id, title, salary, department_id) values (8, "Manager", 500000, 2);
INSERT INTO role (id, title, salary, department_id) values (9, "Manager", 500000, 3);
INSERT INTO role (id, title, salary, department_id) values (10, "Manager", 500000, 4);
INSERT INTO role (id, title, salary, department_id) values (11, "Manager", 500000, 5);
INSERT INTO role (id, title, salary, department_id) values (12, "Manager", 500000, 6);
INSERT INTO role (id, title, salary, department_id) values (13, "Programmer", 250000, 1);
INSERT INTO role (id, title, salary, department_id) values (14, "Programmer", 250000, 2);
INSERT INTO role (id, title, salary, department_id) values (15, "Programmer", 250000, 3);
INSERT INTO role (id, title, salary, department_id) values (16, "Programmer", 250000, 4);
INSERT INTO role (id, title, salary, department_id) values (17, "Programmer", 250000, 5);
INSERT INTO role (id, title, salary, department_id) values (18, "Programmer", 250000, 6);
INSERT INTO role (id, title, salary, department_id) values (19, "Associate", 125000, 1);
INSERT INTO role (id, title, salary, department_id) values (20, "Associate", 125000, 2);
INSERT INTO role (id, title, salary, department_id) values (21, "Associate", 125000, 3);
INSERT INTO role (id, title, salary, department_id) values (22, "Associate", 125000, 4);
INSERT INTO role (id, title, salary, department_id) values (23, "Associate", 125000, 5);
INSERT INTO role (id, title, salary, department_id) values (24, "Associate", 125000, 6);
INSERT INTO role (id, title, salary, department_id) values (25, "Intern", 1000, 1);
INSERT INTO role (id, title, salary, department_id) values (26, "Intern", 1000, 2);
INSERT INTO role (id, title, salary, department_id) values (27, "Intern", 1000, 3);
INSERT INTO role (id, title, salary, department_id) values (28, "Intern", 1000, 4);
INSERT INTO role (id, title, salary, department_id) values (29, "Intern", 1000, 5);
INSERT INTO role (id, title, salary, department_id) values (30, "Intern", 1000, 6);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, "Billy", "McGillicuddy", 1, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, "Sally", "McGillicuddy", 2, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, "Jo", "Bobham", 3, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, "Sra Sra", "Gieligumagu", 4, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, "Phaedus", "Kromme", 5, 5);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, "Veronica", "Vaughan", 6, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (7, "Sleepy", "Jones", 1, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (8, "Tober", "McGillicuddy", 2, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (9, "Fatima", "Patel", 3, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (10, "Akua", "Achebe", 4, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (11, "Kaguya", "Shinomiya", 5, 5);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (12, "Nicholas", "Johnson", 6, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (13, "Susan", "McWhorter", 1, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (14, "Michal", "Eliyahu", 2, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (15, "Yui", "Yuigahama", 3, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (16, "Iolie", "Nkulu", 4, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (17, "Sarah", "Dyjak", 5, 5);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (18, "Tomas", "Holland", 6, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (19, "Elizabeth", "Smith", 1, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (20, "Anson", "Smith", 2, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (21, "Samson", "Harris", 3, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (22, "Salvatore", "Ranallo", 4, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (23, "Chika", "Fujiwara", 5, 5);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (24, "Rosalie", "Dubois", 6, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (25, "Jaylen", "Coltrane", 1, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (26, "Pieter", "Schumacher", 2, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (27, "Vanessa", "Young", 3, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (28, "Scott", "Corgan", 4, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (29, "Roberto", "De Niro", 5, 5);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (30, "Hachiman", "Hikigaya", 6, 6);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

-- SELECT first_name, last_name, title, salary, name
-- FROM employee
-- INNER JOIN role ON employee.id = role.id
-- INNER JOIN department ON role.department_id = department.id
-- ORDER BY manager_id;

-- SELECT first_name, last_name, title, department_name
-- FROM employee
-- INNER JOIN role ON employee.id = role.id
-- ORDER BY manager_id;

-- SELECT name FROM department;

-- SELECT *
-- FROM role
-- INNER JOIN department
-- ON role.department_id = department.id;

-- -- INNER JOIN will only return all matching values from both tables
-- SELECT title, firstName, lastName
-- FROM books
-- INNER JOIN authors ON books.authorId = authors.id;

-- -- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
-- SELECT title, firstName, lastName
-- FROM books
-- LEFT JOIN authors ON books.authorId = authors.id;

-- -- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
-- SELECT title, firstName, lastName
-- FROM books
-- RIGHT JOIN authors ON books.authorId = authors.id;
  