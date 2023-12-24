let input = require('fs').readFileSync('input1017.txt', 'utf8');
let lines = input.split(/\r?\n/);

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = (a*b)/12

console.log(c.toFixed(3));
