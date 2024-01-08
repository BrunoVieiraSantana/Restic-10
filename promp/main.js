var prompt = require('prompt-sync')();

let usuarios = [{name:"Bruno", email:"bruno@gmail.com", phone:"123456789"}]



function mostrarMenu() {
    console.log('1 - Listar pessoas');
    console.log('2 - Adicionar uma pessoa');
    console.log('3 - Sair');
  }

let cond = true
while(cond){
    mostrarMenu()

    var n = prompt('Digite a opção desejada: ');
 
    switch (n){
        case '1':
            console.clear()
            console.log('lista de usuarios')
            console.log(usuarios)
        break
        case '2':
            console.log('adicionar usuarios')
        break
        case '3':
            console.log('saindo')
        break
      }
}
