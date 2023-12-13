const readline = require('readline');
 
let rl = readline.createInterface(
                    process.stdin, process.stdout);

rl.question('Qual o seu nome? ', (nome) => {
    console.log('Seu nome é: ' + nome);
});