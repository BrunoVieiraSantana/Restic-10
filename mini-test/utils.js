const fs = require('fs');
const readline = require('readline-sync');

function listPeople(peopleList) {
    console.log('\nList of People:');
    peopleList.forEach(person => console.log(person));
}

function addPerson(peopleList) {
    const name = readline.question('Enter name: ');
    const email = readline.question('Enter email: ');
    const phone = readline.question('Enter phone: ');

    const newPerson = { name, email, phone };

    const existingPerson = peopleList.find(person => person.email === email);
    if (existingPerson) {
        console.log('Person with this email already exists. Cannot add.');
    } else {
        peopleList.push(newPerson);
        console.log('Person added successfully.');
    }
}

function removePerson(peopleList) {
    const emailToRemove = readline.question('Enter email to remove: ');
    const indexToRemove = peopleList.findIndex(person => person.email === emailToRemove);

    if (indexToRemove !== -1) {
        peopleList.splice(indexToRemove, 1);
        console.log('Person removed successfully.');
    } else {
        console.log('Person not found.');
    }
}

function editPerson(peopleList) {
    const emailToEdit = readline.question('Enter email to edit: ');
    const indexToEdit = peopleList.findIndex(person => person.email === emailToEdit);

    if (indexToEdit !== -1) {
        const newName = readline.question('Enter new name: ');
        const newPhone = readline.question('Enter new phone: ');

        peopleList[indexToEdit].name = newName;
        peopleList[indexToEdit].phone = newPhone;

        console.log('Person edited successfully.');
    } else {
        console.log('Person not found.');
    }
}

function findPerson(peopleList) {
    const emailToFind = readline.question('Enter email to find: ');
    const foundPerson = peopleList.find(person => person.email === emailToFind);

    if (foundPerson) {
        console.log('Person found:');
        console.log(foundPerson);
    } else {
        console.log('Person not found.');
    }
}

function saveData(peopleList) {
    const data = JSON.stringify(peopleList, null, 2);
    fs.writeFileSync('data.json', data);
}

function loadData() {
    try {
        const data = fs.readFileSync('data.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return null;
    }
}

module.exports = { listPeople, addPerson, removePerson, editPerson, findPerson, saveData, loadData };
