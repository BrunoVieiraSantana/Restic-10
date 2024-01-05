console.log('Questão 01')

import readline from 'readline'

const interfaceDeUsuario = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

interfaceDeUsuario.question('Digite o numero A: ', (a) => {
    interfaceDeUsuario.question('Digite o numero B: ', (b) => {
        interfaceDeUsuario.question('Digite o numero C: ', (c) => {
            if (parseFloat(a)+parseFloat(b)>parseFloat(c)){
                console.log(`A+B é maior que C`)
            } if (parseFloat(a)+parseFloat(b)<parseFloat(c)){
                console.log(`A+B é menor que C`)
            } if (parseFloat(a)+parseFloat(b) === parseFloat(c)){
                console.log(`A+B é igual que C`)
            }
            interfaceDeUsuario.close()
        })
    })
})


