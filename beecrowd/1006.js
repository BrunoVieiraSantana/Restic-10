var input = require('fs').readFileSync('input6.txt', 'utf8');
var lines = input.split(/\r?\n/);

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());
var d = a*2+b*3+c*5

console.log('MEDIA = ' + (d/10).toFixed(1));

