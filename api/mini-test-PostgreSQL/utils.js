const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'teste',
    port: 5432,
});

async function listPeople() {
    try {
        const result = await pool.query('SELECT * FROM pessoas');
        return result.rows;
    } catch (error) {
        console.error('Error fetching people:', error);
        throw error;
    }
}

async function addPerson(name, email, phone) {
    try {
        const client = await pool.connect();
        await client.query('BEGIN');

        const insertPersonQuery = 'INSERT INTO pessoas (nome, email) VALUES ($1, $2) RETURNING id';
        const { rows: [person] } = await client.query(insertPersonQuery, [name, email]);

        const insertPhoneQuery = 'INSERT INTO telefones (telefone, pessoa_id) VALUES ($1, $2)';
        await client.query(insertPhoneQuery, [phone, person.id]);

        await client.query('COMMIT');
        console.log('Person added successfully!');
    } catch (error) {
        console.error('Error adding person:', error);
        throw error;
    } finally {
        client.release();
    }
}

async function removePerson(email) {
    try {
        const deleteQuery = 'DELETE FROM pessoas WHERE email = $1';
        await pool.query(deleteQuery, [email]);
        console.log('Person removed successfully!');
    } catch (error) {
        console.error('Error removing person:', error);
        throw error;
    }
}

async function editPerson(email, newName, newPhone) {
    try {
        const updateQuery = 'UPDATE pessoas SET nome = $1 WHERE email = $2';
        await pool.query(updateQuery, [newName, email]);
        console.log('Person edited successfully!');
    } catch (error) {
        console.error('Error editing person:', error);
        throw error;
    }
}

async function findPerson(email) {
    try {
        const findQuery = 'SELECT * FROM pessoas WHERE email = $1';
        const result = await pool.query(findQuery, [email]);
        return result.rows[0];
    } catch (error) {
        console.error('Error finding person:', error);
        throw error;
    }
}

module.exports = { listPeople, addPerson, removePerson, editPerson, findPerson };
