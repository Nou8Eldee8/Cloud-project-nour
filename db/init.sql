create database college;
use college;

CREATE TABLE Student (
    id INT PRIMARY KEY NOT NULL,
    Fname VARCHAR(50) NOT NULL,
    Lname VARCHAR(50) NOT NULL,
    Age INT,
    CGPA DECIMAL(3, 1) NOT NULL,
    CONSTRAINT CHK_CGPA CHECK (CGPA BETWEEN 0 AND 4.0), 
    CONSTRAINT CHK_Age CHECK (Age >= 0) 
);


CREATE TABLE  admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL DEFAULT 'admin',
    username VARCHAR(50) NOT NULL DEFAULT 'admin',
    password VARCHAR(50) NOT NULL DEFAULT 'admin'
);

INSERT INTO admins (name, username, password) VALUES ('admin', 'admin', 'admin');

INSERT INTO Student (id, Fname, Lname, Age, CGPA) VALUES (22011609, 'Nour', 'Hassan', 20, 3.4); 
INSERT INTO Student (id, Fname, Lname, Age, CGPA) VALUES (22011606, 'Mohamed', 'Emad', 21, 3.8); 
INSERT INTO Student (id, Fname, Lname, Age, CGPA) VALUES (22010323, 'Omneya', 'Zayed', 20, 3.6);
INSERT INTO Student (id, Fname, Lname, Age, CGPA) VALUES (22010589, 'Mohamed', 'Mostafa', 19, 3.4); 
INSERT INTO Student (id, Fname, Lname, Age, CGPA) VALUES (22011547, 'Sarah', 'Sherif', 19, 3.8); 



