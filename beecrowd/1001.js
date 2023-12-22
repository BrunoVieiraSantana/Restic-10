var input = require('fs').readFileSync('input1001.txt', 'utf8');
var lines = input.split(/\r?\n/);

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

console.log('X = ' + (a+b));

