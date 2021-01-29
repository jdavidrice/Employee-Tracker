SET SQL_SAFE_UPDATES = 0;
DROP DATABASE IF EXISTS empTracker_db;
CREATE DATABASE empTracker_db;

USE empTracker_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(50)
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

INSERT INTO department (id, name) values (1, "Internet Software and Services");
INSERT INTO department (id, name) values (2, "Software Engineering");
INSERT INTO department (id, name) values (3, "Hardware Engineering");
INSERT INTO department (id, name) values (4, "Machine Learning and AI Strategy");
INSERT INTO department (id, name) values (5, "Worldwide Marketing");
INSERT INTO department (id, name) values (6, "Operations");


INSERT INTO role (id, title, salary, department_id) values (1, "Chief", 1000000, 1);
INSERT INTO role (id, title, salary, department_id) values (2, "Chief", 1000000, 2);
INSERT INTO role (id, title, salary, department_id) values (3, "Chief", 1000000, 3);
INSERT INTO role (id, title, salary, department_id) values (4, "Chief", 1000000, 4);
INSERT INTO role (id, title, salary, department_id) values (5, "Chief", 1000000, 5);
INSERT INTO role (id, title, salary, department_id) values (6, "Chief", 1000000, 6);
INSERT INTO role (id, title, salary, department_id) values (7, "Director", 500000, 1);
INSERT INTO role (id, title, salary, department_id) values (8, "Director", 500000, 2);
INSERT INTO role (id, title, salary, department_id) values (9, "Director", 500000, 3);
INSERT INTO role (id, title, salary, department_id) values (10, "Director", 500000, 4);
INSERT INTO role (id, title, salary, department_id) values (11, "Director", 500000, 5);
INSERT INTO role (id, title, salary, department_id) values (12, "Director", 500000, 6);
INSERT INTO role (id, title, salary, department_id) values (13, "Engineer", 250000, 1);
INSERT INTO role (id, title, salary, department_id) values (14, "Engineer", 250000, 2);
INSERT INTO role (id, title, salary, department_id) values (15, "Engineer", 250000, 3);
INSERT INTO role (id, title, salary, department_id) values (16, "Engineer", 250000, 4);
INSERT INTO role (id, title, salary, department_id) values (17, "Engineer", 250000, 5);
INSERT INTO role (id, title, salary, department_id) values (18, "Engineer", 250000, 6);
INSERT INTO role (id, title, salary, department_id) values (19, "Manager", 125000, 1);
INSERT INTO role (id, title, salary, department_id) values (20, "Manager", 125000, 2);
INSERT INTO role (id, title, salary, department_id) values (21, "Manager", 125000, 3);
INSERT INTO role (id, title, salary, department_id) values (22, "Manager", 125000, 4);
INSERT INTO role (id, title, salary, department_id) values (23, "Manager", 125000, 5);
INSERT INTO role (id, title, salary, department_id) values (24, "Manager", 125000, 6);
INSERT INTO role (id, title, salary, department_id) values (25, "Associate", 62500, 1);
INSERT INTO role (id, title, salary, department_id) values (26, "Associate", 62500, 2);
INSERT INTO role (id, title, salary, department_id) values (27, "Associate", 62500, 3);
INSERT INTO role (id, title, salary, department_id) values (28, "Associate", 62500, 4);
INSERT INTO role (id, title, salary, department_id) values (29, "Associate", 62500, 5);
INSERT INTO role (id, title, salary, department_id) values (30, "Associate", 62500, 6);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, "Billy", "McGillicuddy", 1, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, "Sally", "McGillicuddy", 1, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, "Jo", "Bobham", 1, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, "Sra Sra", "Gieligumagu", 1, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, "Phaedus", "Kromme", 1, 5);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, "Veronica", "Vaughan", 1, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (7, "Sleepy", "Jones", 2, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (8, "Tober", "McGillicuddy", 2, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (9, "Fatima", "Patel", 2, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (10, "Akua", "Achebe", 2, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (11, "Kaguya", "Shinomiya", 2, 5);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (12, "Nicholas", "Johnson", 2, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (13, "Susan", "McWhorter", 3, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (14, "Michal", "Eliyahu", 3, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (15, "Yui", "Yuigahama", 3, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (16, "Iolie", "Nkulu", 3, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (17, "Sarah", "Dyjak", 3, 5);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (18, "Tomas", "Holland", 3, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (19, "Elizabeth", "Smith", 4, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (20, "Anson", "Smith", 4, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (21, "Samson", "Harris", 4, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (22, "Salvatore", "Ranallo", 4, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (23, "Chika", "Fujiwara", 4, 5);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (24, "Rosalie", "Dubois", 4, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (25, "Jaylen", "Coletrane", 5, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (26, "Pieter", "Schumacher", 5, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (27, "Vanessa", "Young", 5, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (28, "Scott", "Corgan", 5, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (29, "Roberto", "De Niro", 5, 5);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (30, "Hachiman", "Hikigaya", 5, 6);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

  