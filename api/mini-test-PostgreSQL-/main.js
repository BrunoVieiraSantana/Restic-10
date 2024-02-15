const readlineSync = require('readline-sync');
const { listPeople, addPerson, removePerson, editPerson, findPerson } = require('./utils');

function principal() {
    let opcao;
    do {
        console.log("\n1 - Listar pessoas");
        console.log("2 - Adicionar uma pessoa");
        console.log("3 - Remover uma pessoa");
        console.log("4 - Editar uma pessoa");
        console.log("5 - Encontrar uma pessoa");
        console.log("6 - Sair");

        opcao = readlineSync.question("Escolha uma opção: ");

        switch (opcao) {
            case '1':
                listPeople().then(pessoas => {
                    console.log("Lista de Pessoas:");
                    pessoas.forEach(pessoa => {
                        console.log(`Nome: ${pessoa.nome}, Email: ${pessoa.email}`);
                    });
                }).catch(erro => {
                    console.error('Erro ao listar pessoas:', erro);
                });
                break;
            case '2':
                const nome = readlineSync.question("Digite o nome: ");
                const email = readlineSync.question("Digite o email: ");
                const telefone = readlineSync.question("Digite o telefone: ");
                addPerson(nome, email, telefone).then(() => {
                    console.log("Pessoa adicionada com sucesso!");
                }).catch(erro => {
                    console.error('Erro ao adicionar pessoa:', erro);
                });
                break;
            case '3':
                const emailRemover = readlineSync.question("Digite o email para remover: ");
                removePerson(emailRemover).then(() => {
                    console.log("Pessoa removida com sucesso!");
                }).catch(erro => {
                    console.error('Erro ao remover pessoa:', erro);
                });
                break;
            case '4':
                const emailEditar = readlineSync.question("Digite o email para editar: ");
                const novoNome = readlineSync.question("Digite o novo nome: ");
                const novoTelefone = readlineSync.question("Digite o novo telefone: ");
                editPerson(emailEditar, novoNome, novoTelefone).then(() => {
                    console.log("Pessoa editada com sucesso!");
                }).catch(erro => {
                    console.error('Erro ao editar pessoa:', erro);
                });
                break;
            case '5':
                const emailEncontrar = readlineSync.question("Digite o email para encontrar: ");
                findPerson(emailEncontrar).then(pessoa => {
                    if (pessoa) {
                        console.log(`Nome: ${pessoa.nome}, Email: ${pessoa.email}`);
                    } else {
                        console.log("Pessoa não encontrada.");
                    }
                }).catch(erro => {
                    console.error('Erro ao encontrar pessoa:', erro);
                });
                break;
            case '6':
                console.log("Encerrando o programa.");
                break;
            default:
                console.log("Opção inválida. Por favor, tente novamente.");
        }
    } while (opcao !== '6');
}

principal();
