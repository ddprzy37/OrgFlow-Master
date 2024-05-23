const inquirer = require('inquirer');
const {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
} = require('./utils'); // Import functions for handling different actions

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
            break;
        case 'Add a Department':
            await addDepartment();
            break;
        case 'Add a Role':
            await addRole();
            break;
        case 'Add an Employee':
            await addEmployee();
            break;
        case 'Update an Employee Role':
            await updateEmployeeRole();
            break;
        case 'Exit':
            console.log('Goodbye!');
            process.exit(0);
    }
}

// Start the application
async function start() {
    console.log('Welcome to Your Application!');

    while (true) {
        await mainMenu(); // Display main menu and handle user input
    }
}

// index.js

const inquirer = require('inquirer');
const { getAllDepartments } = require('./utils/queries');

// Function to display all departments
async function viewAllDepartments() {
    const departments = await getAllDepartments();

    // Format departments into a table
    const table = departments.map(department => ({
        id: department.id,
        name: department.name
    }));

    // Display formatted table
    console.table(table);

    // Return to main menu
    await mainMenu();
}


// Start the application
start();
