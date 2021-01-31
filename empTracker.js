// require("dotenv")
const mysql = require("mysql");
const cTable = require("console.table");
const inquirer = require("inquirer");
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
      choices: [
        "View...",
        "Add...",
        "Update...",
        "Delete..."
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View...":
          viewThings();
          break;
      }
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add...":
          addThings();
          break;
      }
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Update...":
          updateThings();
          break;
      }
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Delete...":
          deleteThings();
          break;
      }
    })
}
function viewThings() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to VIEW?",
      choices: [
        "View departments",
        "View roles",
        "View employees",
        "View employees by manager"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View departments":
          connection.query("SELECT name FROM department", function (err, res) {
            cTable(res);
            runPrompt();
          });
          break;

        case "View roles":
          viewRoles();
          break;

        case "View employees":
          viewEmployees();
          break;

        case "View employees by manager":
          viewEmployeesByManager();
          break;

        case "View the total utilized budget of a department":
          viewBudget();
          break;
      }
    });
}
function addThings() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to ADD?",
      choices: [
        "Add departments",
        "Add roles",
        "Add employees"
      ]
    })
    .then(function () {
      switch (answer.action) {
        case "Add departments":
          addDepartments();
          break;

        case "Add roles":
          addRoles();
          break;

        case "Add employees":
          addEmployees();
          break;
      }
    });
}
function updateThings() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to UPDATE?",
      choices: [
        "Update employee roles",
        "Update employee managers"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Update employee roles":
          updateEmployeeRoles();
          break;

        case "Update employee managers":
          updateEmployeeManagers();
          break;
      }
    });
}
function deleteThings() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to DELETE?",
      choices: [
        "Delete departments",
        "Delete roles",
        "Delete employees"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
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
// function viewDepartments() {
  
// }

function viewRoles() {
  connection.query("SELECT DISTINCT title FROM role", function (err, res) {
    cTable(res)
    runPrompt();
  });
}

function viewEmployees() {
  connection.query("SELECT first_name, last_name FROM employee", function (err, res) {
    cTable(res)
    runPrompt();
  });
}
