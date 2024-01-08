import readline from 'readline';

let intefaceDeUsuario = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


  
function menu () {
    console.log('1 - List people\n2 - Add one people\n3 - Exit')
}

menu()