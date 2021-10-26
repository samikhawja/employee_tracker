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
            case "view all departments": viewDepartments(); break;
            case "view all roles": viewRoles(); break;
            case "view all employees": viewEmployees(); break;
            case "add a department": addDepartment(); break;
            case "add a role": addRole(); break;
            case "add an employee": addEmployee(); break;
            case "update an employee role": update(); break;
        }
    });
}

function viewDepartments() {
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

function viewEmployees() {
    const query = "SELECT * FROM employees;";
    db.query(query, function (err, res) {
        console.table(res);
        menu();
    })
}

function addDepartment(){
    inquirer.prompt({
            type: "input",
            message: "What is the name of the department?",
            name: "addDepo"
        }).then((select) => {
            db.query(`INSERT INTO department (name) VALUES ("${select.addDepo}");`, (err, res) => {
                console.log("Department is added to the database");
                viewDepartments();
            })
        });
}

function addRole(){
    inquirer.prompt({
            type: "input",
            message: "What is the name of the role?",
            name: "roleName",
        },
        {
            type: "input",
            message: "What is role's salary?",
            name: "roleSalary",
        },
        {
            type: "list",
            message: "What department does this role belong to?",
            name: "roleDepartment",
            choices: ["1", "2", "3"],
        }).then((select) => {
            db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${select.roleName}", ${select.roleSalary}, ${select.roleDepartment});`, (err, res) => {
                console.log("Role is added to the database");
                viewRoles();
            })
        });
}

function addEmployee(){
    inquirer.prompt({
            type: "input",
            message: "What is the employee's first name?",
            name: "employeeFirst",
        },
        {
            type: "input",
            message: "What is the employee's last name?",
            name: "employeeLast",
        },
        {
            type: "input",
            message: "What is the employee's role?",
            name: "employeeRole",
            choices: ["1", "2", "3", "4", "5", "6"],
        },
        {
            type: "input",
            message: "Who is the employee's manager id?",
            name: "employeeManager",
            choices: ["2", "4", "6", "null"],
        }).then((select) => {
            db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${select.employeeFirst}", "${select.employeeLast}", ${select.employeeRole}, ${select.employeeManager});`, (err, res) => {
                console.log("Employee is added to the database");
                viewEmployees();
            })
        });
}

function update(){
    inquirer.prompt({
            type: "input",
            message: "What is the employee's name that you would like to update??",
            name: "employeeFirst",
        },
        {
            type: "input",
            message: "What is the employee's new role?",
            name: "employeeLast",
        }).then((select) => {
            db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${select.employeeFirst}", "${select.employeeLast}", ${select.employeeRole}, ${select.employeeManager});`, (err, res) => {
                console.log("Employee is updated to the database");
                viewEmployees();
            })
        });
}