var input = require('fs').readFileSync('input1007.txt', 'utf8');
var lines = input.split(/\r?\n/);

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());
var d = parseInt(lines.shift());
var e = a * b - c * d


console.log('DIFERENCA = ' + e);

