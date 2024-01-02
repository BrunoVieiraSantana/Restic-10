import readline from "readline"

let interfaceDeUsuario = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

interfaceDeUsuario.question("Qual o Seu Nome? \n", (nome) => {
    console.log(`Bem vindo ${nome}`)
    interfaceDeUsuario.close()
})

