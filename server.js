const express = require('express');
const connection = require('./db/connection');
const inquirer = require('inquirer');




const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function promptUser () {
    inquirer.prompt (
     {
        type: 'list',
        name: 'choice',
        message: 'Select one of the following.',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add a employee',
            'Update an employee role',
            'Exit'
        ]
     }   
    )
    .then((answer) => {

        switch (answer.choice) {
            case ("View all departments"):
                departments();
                break;

            case ("View all roles"):
                allRoles();
                break;

            case ("View all employees"):
                allEmployees();
                break;

            case ("Exit"):
                exitApp();
               
        }
    })
}

function departments() {
   const request = 'SELECT * FROM department';
   connection.query(request, function (res) {
       console.log("Departments");
       console.table(res);
       promptUser();
   })
}

function allRoles() {
    const request = 'SELECT * FROM roles';
    connection.query(request, function (res) {
        console.log("Roles");
        console.table(res);
        promptUser();
    })
}

function allEmployees () {
    const request = 'SELECT * FROM employees';
    connection.query(request, function(res) {
        console.log(employees);
        console.table(res);
        promptUser();
    })
}

function exitApp() {
    console.log("Goodbye")
}

promptUser();
