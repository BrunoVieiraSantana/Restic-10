let input = require('fs').readFileSync('input1015.txt', 'utf8');
let lines = input.split(/\r?\n/);

let valores = []

for (let index = 0; index < lines.length; index++) {
    valorLine = lines[index].split(' ')
    valores.push(parseFloat(valorLine[0]))
    valores.push(parseFloat(valorLine[1]))
}

let x1 = parseFloat(valores[0]);
let y1 = parseFloat(valores[1]);
let x2 = parseFloat(valores[2]);
let y2 = parseFloat(valores[3]);
resultado = (x2-x1)**2 + (y2-y1)**2
resultadoFinal = Math.sqrt(resultado)

console.log((resultadoFinal).toFixed(4));
