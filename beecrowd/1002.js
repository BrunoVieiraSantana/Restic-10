var input = require('fs').readFileSync('input1002.txt', 'utf8');
var lines = input.split(/\r?\n/);

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var n = 3.14159
var raio = (input.split(/\r?\n/)).shift()

console.log('A=' + (n*(raio**2)).toFixed(4));

