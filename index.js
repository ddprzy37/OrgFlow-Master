const fs = require('fs');
const { Pool } = require('pg'); // Import Pool class from pg module
const inquirer = require('inquirer');
const { getAllDepartments, getAllEmployees, getAllRoles } = require('./utils/queries');
const pool = require('./config/db'); // Import the pool object from db.js

// Function to execute schema script
async function executeSchemaScript() {
    try {
        // Read schema.sql file
        const schemaSQL = fs.readFileSync('./db/schema.sql', 'utf8');

        // Execute schema script
        await pool.query(schemaSQL);

        console.log('Schema created successfully');
    } catch (error) {
        console.error('Error executing schema script:', error);
    } finally {
        // No need to close the database connection here as it will be handled by the pool
    }
}

// Function to perform database operations
async function performDatabaseOperations() {
    try {
        // Your database operations here
        // For example:
        const result = await pool.query('SELECT * FROM department');
        console.log('Result:', result.rows);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // No need to close the database connection here as it will be handled by the pool
    }
}

// Call the function to perform database operations
performDatabaseOperations();

// Function to display all departments
async function viewAllDepartments() {
    const departments = await getAllDepartments();
    const table = departments.map(department => ({
        id: department.id,
        name: department.name
    }));
    console.table(table);
    await mainMenu();
}

// Function to display all roles
async function viewAllRoles() {
    const roles = await getAllRoles();
    const table = roles.map(role => ({
        id: role.id,
        title: role.title,
        salary: role.salary,
        department_id: role.department_id
    }));
    console.table(table);
    await mainMenu();
}

async function viewAllEmployees() {
    const employees = await getAllEmployees();
    const table = employees.map(employee => ({
        id: employee.id,
        first_name: employee.first_name,
        last_name: employee.last_name,
        role_id: employee.role_id,
        manager_id: employee.manager_id
    }));
    console.table(table);
    await mainMenu();
}

// Main function to display the menu and handle user input
async function mainMenu() {
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role',
                'Exit'
            ]
        }
    ]);

    switch (choice) {
        case 'View All Departments':
            await viewAllDepartments();
            break;
        case 'View All Roles':
            await viewAllRoles();
            break;
        case 'View All Employees':
            await viewAllEmployees();
            break
        case 'Exit':
            console.log('Goodbye!');
            process.exit(0);
    }
}

// Function to start the application
async function start() {
    console.log('Welcome to Your Application!');
    await executeSchemaScript(); // Execute schema creation script
    await mainMenu(); // Display main menu and handle user input
}

// Start the application
start();
