DROP TABLE IF EXISTS employeesTable;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

CREATE DATABASE employees;

USE employees;

CREATE TABLE employeeTable(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY(manager_id) REFERENCES employees(id)
);

CREATE TABLE roles(
    id INT AUTO_INCREMENT,
    title VARCHAR(25),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE departments(
    id INT AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    PRIMARY KEY (id)
);