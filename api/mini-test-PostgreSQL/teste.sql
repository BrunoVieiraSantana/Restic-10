CREATE TABLE pessoas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE telefones (
    id SERIAL PRIMARY KEY,
    telefone VARCHAR(20) NOT NULL,
    pessoa_id INTEGER REFERENCES pessoas(id) ON DELETE CASCADE
);

npm install pg