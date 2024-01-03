<<<<<<< HEAD
const readline = require('readline');
 
let rl = readline.createInterface(
                    process.stdin, process.stdout);

let userRes;
while (userRes !== '1') {
    console.log("Option 1")
    console.log("Option 2")
    console.log("Option 3")
    userRes = rl.question("Escolha uma das opções ");
    if (userRes === '1') {
        console.log("01")
    } else if (userRes === '2') {
        console.log("02")
    }
}
=======
import readline from 'readline';

let interfaceDeUsuario = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu(){
    console.log('1 - Listar usuários')
    console.log('2 - Adicionar usuário')
    console.log('3 - Sair')
}

let usuarios = []

function listar(){
    console.log('lista')
}

function adicionar(){
    console.log("adiciona")
}

function limpar(){
    console.clear()
}

function erro(){
    console.log('Opção invalida')
}

function sair(){
    console.log('Fechando o programa')
}

function iniciar(){
    interfaceDeUsuario.question('Digite o número referente a opção desejada: ', (escolha)=>{
        switch (escolha) {
            case '1':
                limpar()
                listar()
                menu()
                iniciar()
                break;
            case '2':
                limpar()
                adicionar()
                menu()
                iniciar()
                break;
            case '3':
                limpar()
                sair()
                interfaceDeUsuario.close()
                break;
        
            default:
                limpar()
                erro()
                menu()
                iniciar()
                break;
        }

    }) 

}

menu()
iniciar()
>>>>>>> 17ac43935f37df9336f8353b38ebfcbb16773ee8
