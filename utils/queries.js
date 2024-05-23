// utils/queries.js

const pool = require('../config/db');

// Function to get all departments from the database
async function getAllDepartments() {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM departments');
        return result.rows;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllDepartments
};
