async function listPeople() {
    try {
        const result = await pool.query('SELECT * FROM pessoas');
        return result.rows;
    } catch (error) {
        console.error('Erro ao buscar pessoas:', error);
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
        console.log('Pessoa adicionada com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar pessoa:', error);
        throw error;
    } finally {
        client.release();
    }
}

async function removePerson(email) {
    try {
        const deleteQuery = 'DELETE FROM pessoas WHERE email = $1';
        await pool.query(deleteQuery, [email]);
        console.log('Pessoa removida com sucesso!');
    } catch (error) {
        console.error('Erro ao remover pessoa:', error);
        throw error;
    }
}

async function editPerson(email, newName, newPhone) {
    try {
        const updateQuery = 'UPDATE pessoas SET nome = $1 WHERE email = $2';
        await pool.query(updateQuery, [newName, email]);
        console.log('Pessoa editada com sucesso!');
    } catch (error) {
        console.error('Erro ao editar pessoa:', error);
        throw error;
    }
}

async function findPerson(email) {
    try {
        const findQuery = 'SELECT * FROM pessoas WHERE email = $1';
        const result = await pool.query(findQuery, [email]);
        return result.rows[0];
    } catch (error) {
        console.error('Erro ao encontrar pessoa:', error);
        throw error;
    }
}
