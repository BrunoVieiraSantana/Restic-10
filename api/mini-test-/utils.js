const fs = require('fs');

let peopleList = [];

function readDataFromFile() {
    try {
        const data = fs.readFileSync('people.csv', 'utf8');
        peopleList = data.split('\n').map(line => {
            const [name, email, phone] = line.split(',');
            return { name, email, phone };
        });
    } catch (error) {
        peopleList = [];
    }
}

function writeDataToFile() {
    const data = peopleList.map(person => `${person.name},${person.email},${person.phone}`).join('\n');
    fs.writeFileSync('people.csv', data, 'utf8');
}

function listPeople() {
    console.log("Lista de Pessoas:");
    peopleList.forEach(person => {
        console.log(`Nome: ${person.name}, Email: ${person.email}, Telefone: ${person.phone}`);
    });
}

function addPerson(name, email, phone) {
    const existingPerson = peopleList.find(person => person.email === email);
    if (!existingPerson) {
        const newPerson = { name, email, phone };
        peopleList.push(newPerson);
        console.log("Pessoa adicionada com sucesso!");
    } else {
        console.log("E-mail já existe. Por favor, use um e-mail único.");
    }
}

function removePerson(email) {
    peopleList = peopleList.filter(person => person.email !== email);
    console.log("Pessoa removida com sucesso!");
}

function editPerson(email, newName, newPhone) {
    const index = peopleList.findIndex(person => person.email === email);
    if (index !== -1) {
        peopleList[index].name = newName;
        peopleList[index].phone = newPhone;
        console.log("Pessoa editada com sucesso!");
    } else {
        console.log("Pessoa não encontrada. Por favor, verifique o e-mail.");
    }
}

function findPerson(email) {
    const person = peopleList.find(person => person.email === email);
    if (person) {
        console.log(`Nome: ${person.name}, Email: ${person.email}, Telefone: ${person.phone}`);
    } else {
        console.log("Pessoa não encontrada. Por favor, verifique o e-mail.");
    }
}

module.exports = { listPeople, addPerson, removePerson, editPerson, findPerson, readDataFromFile, writeDataToFile };
