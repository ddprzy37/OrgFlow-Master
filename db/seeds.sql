-- Insert departments
INSERT INTO department (name) 
VALUES ('Sales'), ('Marketing'), ('Finance');

-- Insert roles
INSERT INTO role (title, salary, department_id) 
VALUES ('Sales Manager', 60000, 1), ('Marketing Coordinator', 45000, 2), ('Financial Analyst', 55000, 3);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id) VALUES ('John', 'Doe', 1), ('Jane', 'Smith', 2), ('Michael', 'Johnson', 3);
