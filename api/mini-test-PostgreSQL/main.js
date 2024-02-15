const readlineSync = require('readline-sync');
const { listPeople, addPerson, removePerson, editPerson, findPerson } = require('./utils');

function main() {
    let option;
    do {
        console.log("\n1 - List people");
        console.log("2 - Add one person");
        console.log("3 - Remove one person");
        console.log("4 - Edit one person");
        console.log("5 - Find one person");
        console.log("6 - Exit");

        option = readlineSync.question("Choose an option: ");

        switch (option) {
            case '1':
                listPeople().then(people => {
                    console.log("People List:");
                    people.forEach(person => {
                        console.log(`Name: ${person.nome}, Email: ${person.email}`);
                    });
                }).catch(error => {
                    console.error('Error listing people:', error);
                });
                break;
            case '2':
                const name = readlineSync.question("Enter name: ");
                const email = readlineSync.question("Enter email: ");
                const phone = readlineSync.question("Enter phone: ");
                addPerson(name, email, phone).then(() => {
                    console.log("Person added successfully!");
                }).catch(error => {
                    console.error('Error adding person:', error);
                });
                break;
            case '3':
                const removeEmail = readlineSync.question("Enter the email to remove: ");
                removePerson(removeEmail).then(() => {
                    console.log("Person removed successfully!");
                }).catch(error => {
                    console.error('Error removing person:', error);
                });
                break;
            case '4':
                const editEmail = readlineSync.question("Enter the email to edit: ");
                const newName = readlineSync.question("Enter the new name: ");
                const newPhone = readlineSync.question("Enter the new phone: ");
                editPerson(editEmail, newName, newPhone).then(() => {
                    console.log("Person edited successfully!");
                }).catch(error => {
                    console.error('Error editing person:', error);
                });
                break;
            case '5':
                const findEmail = readlineSync.question("Enter the email to find: ");
                findPerson(findEmail).then(person => {
                    if (person) {
                        console.log(`Name: ${person.nome}, Email: ${person.email}`);
                    } else {
                        console.log("Person not found.");
                    }
                }).catch(error => {
                    console.error('Error finding person:', error);
                });
                break;
            case '6':
                console.log("Exiting program.");
                break;
            default:
                console.log("Invalid option. Please try again.");
        }
    } while (option !== '6');
}

main();
