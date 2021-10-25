const inquirer = require('inquirer');
// const express = require('express');
// const mysql = require('mysql2');
// const app = express();
// const PORT = process.env.PORT || 3001;

// const db = mysql.createConnection(
//     {
//         host: "localhost",
//         user: "root",
//         password: "password",
//         database: "tracker_db"
//     }
// )

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const questions = [
    {
        type: "list",
        message: "Main Menu",
        name: "mainMenu",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
    },
    {
        type: "input",
        message: "What is the name of the department?",
        name: "addDepartment",
        when: () => answer.mainMenu === "add a department"
    },
    {
        type: "input",
        message: "",
        name: "roleName",
        when: () => answer.mainMenu === "add a role"
    },
    {
        type: "input",
        message: "",
        name: "roleSalary",
        when: () => answer.mainMenu === "add a role"
    },
    {
        type: "list",
        message: "",
        name: "roleDepartment",
        choices: [],
        when: () => answer.mainMenu === "add a role"
    },
    {
        type: "input",
        message: "",
        name: "employeeFirst",
        when: () => answer.mainMenu === "add an employee"
    },
    {
        type: "input",
        message: "",
        name: "employeeLast",
        when: () => answer.mainMenu === "add an employee"
    },
    {
        type: "input",
        message: "",
        name: "employeeRole",
        when: () => answer.mainMenu === "add an employee"
    },
    {
        type: "input",
        message: "",
        name: "employeeManager",
        when: () => answer.mainMenu === "add an employee"
    },
];

function init(){
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);
    });
}
init();

// app.listen(PORT, () => {
//     console.log(`listening on http://localhost:${PORT}`);
// });