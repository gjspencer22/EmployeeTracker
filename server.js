const inquirer = require('inquirer');
const db = require('./db/connection');
const mysql = require('mysql');
const express = require('express');
const router = express.Router();


db.connect(async function () {
    start();
})

function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Select an option.',
            choices: [
                'View Employees',
                'View Roles',
                'View Departments',
                'Add Employee',
                'Add Role',
                'Add Department',
                'Quit'
            ],
        }
    ]
    )
        .then((answer) => {
            switch (answer.choice) {
                
                case 'View Employees':
                    
                    viewEmployees();

                // case 'View Roles':

                //     viewRoles();

                // case 'View Departments':

                //     viewDepartments();

                // case 'Add Employee':

                //     addEmployee();

                // case 'Add Role':

                //     addRole();

                // case 'Add Department':

                //     addDepartment();

                // case 'Quit':

                //     Quit();
            }

        }

        )
}

function viewEmployees() {
    let request = "SELECT * FROM bussiness";
    db.query(request, function(err, res) {
      if (err) throw err;
      console.log("Viewing All Employees");
      console.table(res);
      start();
    })
  };


// viewEmployees();
