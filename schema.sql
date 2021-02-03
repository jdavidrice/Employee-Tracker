SET SQL_SAFE_UPDATES = 0;
DROP DATABASE IF EXISTS empTracker_db;
CREATE DATABASE empTracker_db;

USE empTracker_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  department_name VARCHAR(50),
  PRIMARY KEY (id)
);
 
CREATE TABLE role (
  id INT AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);

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
  