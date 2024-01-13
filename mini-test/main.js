const readline = require('readline-sync');
const { listPeople, addPerson, removePerson, editPerson, findPerson, saveData, loadData } = require('./utils');

function main() {
    let peopleList;

    if (loadData()) {
        peopleList = loadData();
    } else {
        peopleList = [];
    }

    while (true) {
        console.log('\n1 - List People');
        console.log('2 - Add Person');
        console.log('3 - Remove Person');
        console.log('4 - Edit Person');
        console.log('5 - Find Person');
        console.log('6 - Exit');

        const choice = readline.question('Enter your choice: ');

        switch (choice) {
            case '1':
                listPeople(peopleList);
                break;
            case '2':
                addPerson(peopleList);
                break;
            case '3':
                removePerson(peopleList);
                break;
            case '4':
                editPerson(peopleList);
                break;
            case '5':
                findPerson(peopleList);
                break;
            case '6':
                saveData(peopleList);
                process.exit(0);
            default:
                console.log('Invalid choice. Please enter a number between 1 and 6.');
        }
    }
}

main();
