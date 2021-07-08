const express = require('express');
const db = require('./db/connection');
const apiRouts = require('.routes/apiRoutes');
const inquirer = require('inquirer');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function promptUser () {
    inquirer.prompt (
     {

     }   
    )
}
