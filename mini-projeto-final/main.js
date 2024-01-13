const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function menu(){
    console.log('Sistema de Funcionários')
    console.log('   1 - Listar')
    console.log('   2 - Adicionar')
    console.log('   3 - Remover')
    console.log('   4 - Editar')
    console.log('   5 - Encontrar')
    console.log('   6 - Sair')

    rl.question('Escolha uma das oçoes \n > ', (escolha) => {
       
    switch (escolha) {
        case '1':
            console.clear()
            console.log('lista')
            console.log('')
            break
        case '2':
            console.clear()
            console.log('adicionar')
            console.log('')
            break
        case '3':
            console.clear()
            console.log('remover')
            console.log('')
            break
        case '4':
            console.clear()
            console.log('editar')
            console.log('')
            break
        case '5':
            console.clear()
            console.log('encontrar')
            console.log('')
            break
        case '6':
            rl.close(); 
            return
        default:
            console.log('Opção invalida')   
    }
    menu()
});
}

console.clear()
menu()