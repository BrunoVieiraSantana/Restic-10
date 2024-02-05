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
    console.log("People List:");
    peopleList.forEach(person => {
        console.log(`Name: ${person.name}, Email: ${person.email}, Phone: ${person.phone}`);
    });
}

function addPerson(name, email, phone) {
    const existingPerson = peopleList.find(person => person.email === email);
    if (!existingPerson) {
        const newPerson = { name, email, phone };
        peopleList.push(newPerson);
        console.log("Person added successfully!");
    } else {
        console.log("Email already exists. Please use a unique email.");
    }
}

function removePerson(email) {
    peopleList = peopleList.filter(person => person.email !== email);
    console.log("Person removed successfully!");
}

function editPerson(email, newName, newPhone) {
    const index = peopleList.findIndex(person => person.email === email);
    if (index !== -1) {
        peopleList[index].name = newName;
        peopleList[index].phone = newPhone;
        console.log("Person edited successfully!");
    } else {
        console.log("Person not found. Please check the email.");
    }
}

function findPerson(email) {
    const person = peopleList.find(person => person.email === email);
    if (person) {
        console.log(`Name: ${person.name}, Email: ${person.email}, Phone: ${person.phone}`);
    } else {
        console.log("Person not found. Please check the email.");
    }
}

module.exports = { listPeople, addPerson, removePerson, editPerson, findPerson, readDataFromFile, writeDataToFile };
