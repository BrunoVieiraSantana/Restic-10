var input = require('fs').readFileSync('input1008.txt', 'utf8');
var lines = input.split(/\r?\n/);

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());

console.log('NUMBER = ' + a)
console.log('SALARY = U$ ' + (b*c).toFixed(2))

