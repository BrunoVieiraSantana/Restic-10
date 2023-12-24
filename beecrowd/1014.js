var input = require('fs').readFileSync('input1014.txt', 'utf8');
var lines = input.split(/\r?\n/);

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());
let resultado = (a/b);

console.log(((resultado).toFixed(3) + ' km/l'));
