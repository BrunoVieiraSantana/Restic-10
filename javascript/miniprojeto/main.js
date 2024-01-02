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