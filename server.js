const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require('console.table');

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "tracker_db"
});

db.connect((err) => {
    if(err) throw err;
    console.log("\n Plese select one of the following below \n");
    menu();
});

function menu(){
    inquirer.prompt({
        type: "list",
        message: "Main Menu",
        name: "menu",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
    }).then((select) => {
        switch(select.menu){
            case "view all departments": viewDepartment(); break;
            case "view all roles": viewRoles(); break;
            case "view all employees": addDepartment(); break;
            case "add a department": addDepartment(); break;
            case "add a role": addDepartment(); break;
            case "add an employee": addDepartment(); break;
            case "update an employee role": addDepartment(); break;
        }
    });
}

function viewDepartment() {
    const query = "SELECT * FROM department;";
    db.query(query, function (err, res) {
        console.table(res);
        menu();
    })
}

function viewRoles() {
    const query = "SELECT * FROM role;";
    db.query(query, function (err, res) {
        console.table(res);
        menu();
    })
}




// {
//     type: "input",
//     message: "What is the name of the department?",
//     name: "addDepartment",
//     when: () => answer.menu === "add a department"
// },
// {
//     type: "input",
//     message: "",
//     name: "roleName",
//     when: () => answer.menu === "add a role"
// },
// {
//     type: "input",
//     message: "",
//     name: "roleSalary",
//     when: () => answer.menu === "add a role"
// },
// {
//     type: "list",
//     message: "",
//     name: "roleDepartment",
//     choices: [],
//     when: () => answer.menu === "add a role"
// },
// {
//     type: "input",
//     message: "",
//     name: "employeeFirst",
//     when: () => answer.menu === "add an employee"
// },
// {
//     type: "input",
//     message: "",
//     name: "employeeLast",
//     when: () => answer.menu === "add an employee"
// },
// {
//     type: "input",
//     message: "",
//     name: "employeeRole",
//     when: () => answer.menu === "add an employee"
// },
// {
//     type: "input",
//     message: "",
//     name: "employeeManager",
//     when: () => answer.menu === "add an employee"
// },

// function init(){
//     inquirer
//     .prompt(questions)
//     .then((response) => {
//         if(response.menu === "done"){
//             console.log("Session Complete")
//         }
//     });
// }
// init();