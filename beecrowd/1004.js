var input = require('fs').readFileSync('input1004.txt', 'utf8');
var lines = input.split(/\r?\n/);

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

console.log('PROD = ' + (a*b));