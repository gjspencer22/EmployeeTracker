DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS employeeRole;
DROP TABLE IF EXISTS department;
CREATE DATABASE employee;

USE employee;

CREATE TABLE employee(
    id INTEGER NOT NULL,
    book_name NOT NULL
    first_name VARCHAR(20) NOT NULL,
    LAST_NAME VARCHAR(20) NOT NULL
);


