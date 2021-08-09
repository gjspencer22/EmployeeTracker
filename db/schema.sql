DROP DATABASE IF EXISTS business;
CREATE DATABASE business;


USE business;


CREATE TABLE department(
    id INT AUTO_INCREMENT,
    department_name VARCHAR(25) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles(
    id INT AUTO_INCREMENT,
    title VARCHAR(25),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);
CREATE TABLE employees(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    REFERENCES employees(id)
);

