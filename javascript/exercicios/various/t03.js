const alunos = ['Bruno', 'Venus', 'Kelly']

alunos.push('Sara')

console.log(alunos)

const notas = []

notas.push(5)
notas.push(7)
notas.push(8)
notas.push(4)

// for (let index = 0; index < notas.length; index++) {
//     console.log(notas[index], index+1)
// }

let soma = 0
for (let index = 0; index < notas.length; index++) {
    const nota = notas[index]
    soma = soma + nota
}

console.log(soma/notas.length)