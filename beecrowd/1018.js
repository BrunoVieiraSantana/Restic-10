let input = require('fs').readFileSync('input1018.txt', 'utf8');
let lines = input.split(/\r?\n/);

/*/
Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.
/*/

let n = parseInt(lines.shift());
let n100 = Math.floor(n/100)
let n50 =  Math.floor((n-(n100*100))/50)
let n20 =  Math.floor((n-(n100*100+n50*50))/20)
let n10 =  Math.floor((n-(n100*100+n50*50+n20*20))/10)
let n5 =  Math.floor((n-(n100*100+n50*50+n20*10+n10*10))/5)
let n2 =  Math.floor((n-(n100*100+n50*50+n20*10+n10*10+n5*5))/2)
let n1 =  Math.floor((n-(n100*100+n50*50+n20*10+n10*10+n5*5+n2*2))/1)

console.log(n)
console.log(`${n100} nota(s) de R$ 100,00
${n50} nota(s) de R$ 50,00
${n20} nota(s) de R$ 20,00
${n10} nota(s) de R$ 10,00
${n5} nota(s) de R$ 5,00
${n2} nota(s) de R$ 2,00
${n1} nota(s) de R$ 1,00`)
 