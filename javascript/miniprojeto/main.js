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