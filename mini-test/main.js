const readlineSync = require('readline-sync');
const { listPeople, addPerson, removePerson, editPerson, findPerson, readDataFromFile, writeDataToFile } = require('./utils');

readDataFromFile();

function main() {
    let option;
    do {
        console.log("\n1 - List people");
        console.log("2 - Add one people");
        console.log("3 - Remove one people");
        console.log("4 - Edit one people");
        console.log("5 - Find one people");
        console.log("6 - Exit");

        option = readlineSync.question("Choose an option opção: ");

        switch (option) {
            case '1':
                listPeople();
                break;
            case '2':
                const name = readlineSync.question("Enter name: ");
                const email = readlineSync.question("Enter email: ");
                const phone = readlineSync.question("Enter phone: ");
                addPerson(name, email, phone);
                writeDataToFile();
                break;
            case '3':
                const removeEmail = readlineSync.question("Enter the email to remove: ");
                removePerson(removeEmail);
                writeDataToFile();
                break;
            case '4':
                const editEmail = readlineSync.question("Enter the email to edit: ");
                const newName = readlineSync.question("Enter the new name: ");
                const newPhone = readlineSync.question("Enter the new phone: ");
                editPerson(editEmail, newName, newPhone);
                writeDataToFile();
                break;
            case '5':
                const findEmail = readlineSync.question("Enter the email to find: ");
                findPerson(findEmail);
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
