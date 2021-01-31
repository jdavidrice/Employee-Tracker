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

  // console.table([
  //   {
  //     name: 'foo',
  //     age: 10
  //   }, {
  //     name: 'bar',
  //     age: 20
  //   }
  // ]);

});

function runPrompt() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "Welcome to your Employee Management System. What would you like to do?",
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
    .then(function (answer) {
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
    runPrompt();
  });
}

function viewRoles() {
  connection.query("SELECT DISTINCT title FROM role", function (err, res) {
    console.table(res)
    runPrompt();
  });
}

function viewEmployees() {
  connection.query("SELECT first_name, last_name FROM employee", function (err, res) {
    console.table(res)
    runPrompt();
  });
}
