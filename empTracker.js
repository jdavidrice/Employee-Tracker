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
      pageSize: 15,
      choices: [
        "View departments",
        "View roles",
        "View employees",
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

        case "View employees by manager":
          viewManagers();
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
  connection.query("SELECT name FROM department", function (err, res) {
    console.table(res)
    runPrompt()
  });
}

function viewRoles() {
  connection.query("SELECT DISTINCT title FROM role", function (err, res) {
    console.table(res)
    runPrompt()
  });
}

function viewEmployees() {
  connection.query("SELECT first_name, last_name FROM employee", function (err, res) {
    console.table(res)
    runPrompt();
  });
}

function viewManagers() {
  connection.query("SELECT title, first_name, last_name, manager_id FROM employee INNER JOIN role ON employee.id = role.id WHERE title = 'manager'", function (err, res) {
    console.table(res)
  });
}

function viewEmployeesByManager() {
  inquirer
    .prompt({
      name: "manager_id",
      type: "rawlist",
      message: "What manager do you want to search by?",
      choices: [1, 2, 3, 4, 5, 6]
    })
    .then((answer) => {
      const query = `SELECT manager_id, title, first_name, last_name, name FROM employee  INNER JOIN role ON employee.id = role.id INNER JOIN department ON role.department_id = department.id WHERE employee.manager_id = ${answer.manager_id}`;
      connection.query(query, { manager_id: answer.manager_id }, function (err, res) {
        console.table(res);
        runPrompt();
      });
    });
}
