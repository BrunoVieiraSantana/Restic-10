let input = require('fs').readFileSync('input1021.txt', 'utf8');
let lines = input.split(/\r?\n/);


let n = parseInt(lines.shift());
let mn = parseInt(lines.shift());
let n100 = Math.floor(n/100)
let n50 =  Math.floor((n-(n100*100))/50)
let n20 =  Math.floor((n-(n100*100+n50*50))/20)
let n10 =  Math.floor((n-(n100*100+n50*50+n20*20))/10)
let n5 =  Math.floor((n-(n100*100+n50*50+n20*10+n10*10))/5)
let n2 =  Math.floor((n-(n100*100+n50*50+n20*10+n10*10+n5*5))/2)
let n1 =  Math.floor((n-(n100*100+n50*50+n20*10+n10*10+n5*5+n2*2))/1)
let m =  m0-(n100*100+n50*50+n20*10+n10*10+n5*5+n2*2)

console.log(`NOTAS:
${n100} nota(s) de R$ 100,00
${n50} nota(s) de R$ 50,00
${n20} nota(s) de R$ 20,00
${n10} nota(s) de R$ 10,00
${n5} nota(s) de R$ 5,00
${n2} nota(s) de R$ 2,00
MOEDAS:
${n1} moeda(s) de R$ 1.00
${m0} moeda(s) de R$ 0.50
${m} moeda(s) de R$ 0.25
${n} moeda(s) de R$ 0.10
${n} moeda(s) de R$ 0.05
${lines} moeda(s) de R$ 0.01`)
 