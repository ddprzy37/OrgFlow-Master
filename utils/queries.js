// utils/queries.js

const pool = require('../config/db');

// Function to get all departments from the database
async function getAllDepartments() {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM department'); // Correct table name here
        return result.rows;
    } finally {
        client.release();
    }
}

// Function to get all roles from the database
async function getAllRoles() {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM role');
        return result.rows;
    } finally {
        client.release();
    }
}

// Function to get all employees from the database
async function getAllEmployees() {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM employee');
        return result.rows;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees
};
