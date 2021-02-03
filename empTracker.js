require("console.table");
const mysql = require("mysql");
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
  console.log(`Connected as id: ${connection.threadId}`);
  console.log(`Connected to PORT: ${PORT}`);
  runPrompt();
});
function viewAllByDepartment() {
  connection.query("SELECT first_name AS 'First Name', last_name AS 'Last Name', title AS 'Title', salary AS 'Salary', department_name AS 'Department Name' FROM employee INNER JOIN role ON employee.id = role.id INNER JOIN department ON role.department_id = department.id ORDER BY department.department_name", function (err, res) {
    console.table(res);
    runPrompt();
  });
}
function viewDepartments() {
  connection.query("SELECT department_name AS 'Department Name', id AS 'ID' FROM department", function (err, res) {
    console.table(res);
    runPrompt();
  });
}
function viewRoles() {
  connection.query("SELECT DISTINCT title AS 'Title' FROM role", function (err, res) {
    console.table(res);
    runPrompt();
  });
}
function viewEmployees() {
  connection.query("SELECT first_name AS 'First Name', last_name AS 'Last Name' FROM employee", function (err, res) {
    console.table(res);
    runPrompt();
  });
}
function viewManagers() {
  connection.query("SELECT title AS 'Title', first_name AS 'First Name', last_name AS 'Last Name', manager_id AS 'Manager ID' FROM employee INNER JOIN role ON employee.id = role.id WHERE title = 'manager'", function (err, res) {
    console.table(res);
    runPrompt();
  });
}
function viewEmployeesByManager() {
  inquirer
    .prompt({
      name: "manager_id",
      type: "input",
      message: "What manager's team do you want to view?"
    })
    .then((answer) => {
      const query = `SELECT manager_id AS 'Manager ID', title AS 'Title', first_name AS 'First Name', last_name AS 'Last Name', department_name AS 'Department Name' FROM employee INNER JOIN role ON employee.id = role.id INNER JOIN department ON role.department_id = department.id WHERE employee.manager_id = ${answer.manager_id}`;
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
      type: "input",
      message: "What department's budget do you want to view?"
    })
    .then((answer) => {
      const query = `SELECT ${answer.department_id}, department_name AS 'Department Name', SUM(role.salary) AS 'Total Department Budget' FROM role INNER JOIN department ON role.department_id = department.id WHERE department_id = ${answer.department_id};`;
      connection.query(query, { department_id: answer.department_id }, function (err, res) {
        console.table(res);
        runPrompt();
      });
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
      const query = `INSERT INTO department (department_name) VALUES ("${answer.department_name}");`;
      connection.query(query, { department_name: answer.department_name }, function (err, res) {
        viewDepartments();
      });
    });
}
function addRoles() {
  inquirer
    .prompt({
      name: "title",
      type: "input",
      message: "What role would you like to add?"
    })
    .then((answer) => {
      const query = `INSERT INTO role (title) VALUES ("${answer.title}");`;
      connection.query(query, { title: answer.title }, function (err, res) {
        viewRoles();
      });
    });
}
// function addEmployees() {
//   inquirer
//     .prompt([
//       {
//         name: "newEmpFirstName",
//         type: "input",
//         message: "What is the new employee's first name?"
//       },
//       {
//         name: "newEmpLastName",
//         type: "input",
//         message: "What is the new employee's last name?"
//       },
//       {
//         name: "newEmpRoleId",
//         type: "input",
//         message: "What is the new employee's role id?"
//       },
//       {
//         name: "newEmpManagerId",
//         type: "input",
//         message: "What is the new employee's manager id?"
//       }
//     ])
//     .then((answer) => {
//       const query = `INSERT INTO employee VALUES ("${answer.newEmpFirstName}", "${answer.newEmpLastName}", "${answer.newEmpRoleId}", "${answer.newEmpManagerId}");`
//       connection.query(query, [answer.newEmpFirstName, answer.newEmpLastName, answer.newEmpRoleId, answer.newEmpManagerId], function (err, res) {
//         viewEmployees();
//       })
//     })
// }
// function updateEmployeeRoles() {
//   inquirer
//     .prompt({
//       name: "newRole",
//       type: "input",
//       message: "What role update would you like to enact?"
//     })
//     .then((answer) => {
//       const query = `UPDATE role SET title = ${answer.newRole} WHERE id = 1;`
//       connection.query(query, { newRole: answer.newRole }, function (err, res) {
//         viewRoles();
//       })
//     })
// }

// function updateEmployeeManagers() {

// }
// function deleteDepartments() {

// }
// function deleteRoles() {

// }
// function deleteEmployees() {

// }
function runPrompt() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "Welcome to your Employee Management System. What would you like to do?",
      pageSize: 20,
      choices: [
        "View all employee info by department",
        "View departments",
        "View roles",
        "View employees",
        "View managers",
        "View employees by manager",
        "View the total utilized budget of a department",
        "Add departments",
        "Add roles"
        // "Add employees",
        // "Update employee roles",
        // "Update employee managers",
        // "Delete departments",
        // "Delete roles",
        // "Delete employees"
      ]
    })
    .then((answer) => {
      switch (answer.action) {
        case "View all employee info by department":
          viewAllByDepartment();
          break;

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

        // case "Add employees":
        //   addEmployees();
        //   break;

        // case "Update employee roles":
        //   updateEmployeeRoles();
        //   break;

        // case "Update employee managers":
        //   updateEmployeeManagers();
        //   break;

        // case "Delete departments":
        //   deleteDepartments();
        //   break;

        // case "Delete roles":
        //   deleteRoles();
        //   break;

        // case "Delete employees":
        //   deleteEmployees();
        //   break;
      }
    });
}