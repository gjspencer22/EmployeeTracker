const express = require('express');
const db = require('./db/connection');
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
            'View all Employees',
            'Add a department',
            'Add a role',
            'Add a employee',
            'Update an employee role'
        ]
     }   
    )
    .then((answer) => {
        switch (answer.options) {
            case ("View all departments"):
                departments();
                break;
        }
    })
}

function departments() {
   const request = 'SELECT * FROM department';
   connection.query(request, function ( res) {
       console.log("Departments");
       console.table(res);
       promptUser();
   })
}
promptUser();
