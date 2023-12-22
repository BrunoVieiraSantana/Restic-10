var input = require('fs').readFileSync('input5.txt', 'utf8');
var lines = input.split(/\r?\n/);

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = a*3.5+b*7.5

console.log('MEDIA = ' + (c/11).toFixed(5));

