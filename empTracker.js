// require("dotenv")
require('console.table');
const mysql = require('mysql');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3306;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "empTracker_db",
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected as id: " + connection.threadId);
  console.log(`Connected to PORT: ${PORT}`);
  console.log("");
  runPrompt();
});

function runPrompt() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "Welcome to your Employee Management System. What would you like to do?",
      pageSize: 16,
      choices: [
        "View departments",
        "View roles",
        "View employees",
        "View managers",
        "View employees by manager",
        "View the total utilized budget of a department",
        "Add departments",
        "Add roles",
        "Add employees",
        "Update employee roles",
        "Update employee managers",
        "Delete departments",
        "Delete roles",
        "Delete employees"
      ]
    })
    .then(answer => {
      switch (answer.action) {
        case "View departments":
          viewDepartments();
          break;

        case "View roles":
          viewRoles();
          break;

        case "View employees":
          viewEmployees();
          break;

        case "View managers":
          viewManagers();
          break;

        case "View employees by manager":
          viewEmployeesByManager();
          break;

        case "View the total utilized budget of a department":
          viewBudget();
          break;

        case "Add departments":
          addDepartments();
          break;

        case "Add roles":
          addRoles();
          break;

        case "Add employees":
          addEmployees();
          break;

        case "Update employee roles":
          updateEmployeeRoles();
          break;

        case "Update employee managers":
          updateEmployeeManagers();
          break;

        case "Delete departments":
          deleteDepartments();
          break;

        case "Delete roles":
          deleteRoles();
          break;

        case "Delete employees":
          deleteEmployees();
          break;
      }
    });
}
function viewDepartments() {
  connection.query("SELECT department_name AS 'Department Name', id FROM department", function (err, res) {
    console.table(res)
    runPrompt()
  });
}
function viewRoles() {
  connection.query("SELECT DISTINCT title AS 'Title' FROM role", function (err, res) {
    console.table(res)
    runPrompt()
  });
}
function viewEmployees() {
  connection.query("SELECT first_name AS 'First Name', last_name AS 'Last name' FROM employee", function (err, res) {
    console.table(res)
    runPrompt();
  });
}
function viewManagers() {
  connection.query("SELECT title as 'Title', first_name, last_name, manager_id FROM employee INNER JOIN role ON employee.id = role.id WHERE title = 'manager'", function (err, res) {
    console.table(res)
    runPrompt();
  });
}
function viewEmployeesByManager() {
  inquirer
    .prompt({
      name: "manager_id",
      type: "rawlist",
      message: "What manager's team do you want to view?",
      choices: [1, 2, 3, 4, 5, 6]
    })
    .then((answer) => {
      const query = `SELECT manager_id, title, first_name, last_name, department_name FROM employee INNER JOIN role ON employee.id = role.id INNER JOIN department ON role.department_id = department.id WHERE employee.manager_id = ${answer.manager_id}`;
      connection.query(query, { manager_id: answer.manager_id }, function (err, res) {
        console.table(res);
        runPrompt();
      });
    });
}
function viewBudget() {
  inquirer
    .prompt({
      name: "department_id",
      type: "rawlist",
      message: "What department's budget do you want to view?",
      choices: [1, 2, 3, 4, 5, 6]
    })
    .then((answer) => {
      const query = `SELECT ${answer.department_id}, department_name, SUM(role.salary) as Total_department_budget FROM role INNER JOIN department ON role.department_id = department.id WHERE department_id = ${answer.department_id};`
      connection.query(query, { department_id: answer.department_id }, function (err, res) {
        console.table(res);
        runPrompt();
      })
    });
}
function addDepartments() {
  inquirer
    .prompt({
      name: "department_name",
      type: "input",
      message: "What department would you like to add?"
    })
    .then((answer) => {
      const query = `INSERT INTO department VALUES (7, "${answer.department_name}");`
      connection.query(query, { department_name: answer.department_name }, function (err, res) {
        console.table(res);
        runPrompt();
      })
    })
}
// --SELECT first_name, last_name, title, salary, name
// --FROM employee
// --INNER JOIN role ON employee.id = role.id
// --INNER JOIN department ON role.department_id = department.id
// --ORDER BY manager_id;