let input = require('fs').readFileSync('input1016.txt', 'utf8');
let lines = input.split(/\r?\n/);

let a = parseInt(lines.shift());

console.log(`${(a*2)} minutos`);
