var input = require('fs').readFileSync('input1009.txt', 'utf8');
var lines = input.split(/\r?\n/);

var a = parseFloat(lines.shift());
var c = parseFloat(lines.shift());
var b = parseFloat(lines.shift());

console.log('TOTAL = R$ ' + ((b*0.15)+c).toFixed(2))

