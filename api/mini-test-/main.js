const readlineSync = require('readline-sync');
const { listPeople, addPerson, removePerson, editPerson, findPerson, readDataFromFile, writeDataToFile } = require('./utils');

readDataFromFile();

function main() {
    let option;
    do {
        console.log("\n1 - Listar pessoas");
        console.log("2 - Adicionar uma pessoa");
        console.log("3 - Remover uma pessoa");
        console.log("4 - Editar uma pessoa");
        console.log("5 - Encontrar uma pessoa");
        console.log("6 - Sair");

        option = readlineSync.question("Escolha uma opção: ");

        switch (option) {
            case '1':
                listPeople();
                break;
            case '2':
                const name = readlineSync.question("Digite o nome: ");
                const email = readlineSync.question("Digite o e-mail: ");
                const phone = readlineSync.question("Digite o telefone: ");
                addPerson(name, email, phone);
                writeDataToFile();
                break;
            case '3':
                const removeEmail = readlineSync.question("Digite o e-mail para remover: ");
                removePerson(removeEmail);
                writeDataToFile();
                break;
            case '4':
                const editEmail = readlineSync.question("Digite o e-mail para editar: ");
                const newName = readlineSync.question("Digite o novo nome: ");
                const newPhone = readlineSync.question("Digite o novo telefone: ");
                editPerson(editEmail, newName, newPhone);
                writeDataToFile();
                break;
            case '5':
                const findEmail = readlineSync.question("Digite o e-mail para encontrar: ");
                findPerson(findEmail);
                break;
            case '6':
                console.log("Encerrando programa.");
                break;
            default:
                console.log("Opção inválida. Por favor, tente novamente.");
        }
    } while (option !== '6');
}

main();
