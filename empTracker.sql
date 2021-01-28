SET SQL_SAFE_UPDATES = 0;
DROP DATABASE IF EXISTS empTracker_db;
CREATE DATABASE empTracker_db;

USE empTracker_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30)
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

INSERT INTO department (id, name)
VALUES (1, "Accounting");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Chief Bean Counter", 1000000.00, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Billy", "Magilicutty", 1, 1);
 
 SELECT * FROM department;
 SELECT * FROM role;
 SELECT * FROM employee;
  