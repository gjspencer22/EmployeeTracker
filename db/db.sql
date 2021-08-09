DROP DATABASE IF EXISTS bussiness;
CREATE DATABASE bussiness;
USE bussiness;

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(20)NOT NULL,
    last_name VARCHAR(20) NOT NULL
    PRIMARY KEY (id)

);
