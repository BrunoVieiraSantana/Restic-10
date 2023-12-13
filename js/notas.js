const nota1 = 7;
const nota2 = 7;
const nota3 = 6;

const media = (nota1+nota2+nota3)/3;

console.log('A média do aluno é '+ media.toFixed(2));

if (media < 5) {
    console.log('O aluno foi reprovado')
} else if (media >= 7) {
    console.log('O aluno foi aprovado')
} else if (media >= 5 && media <7) {
    console.log('O aluno está de recuperação')
}

/*/
if (media < 5) {
    console.log('O aluno foi reprovado')
} else if (media >= 7) {
    console.log('O aluno foi aprovado')
} else if (media >= 5 || media <7) {
    console.log('O aluno está de recuperação')
}
/*/
