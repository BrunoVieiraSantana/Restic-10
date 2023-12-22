var input = require('fs').readFileSync('input1010.txt', 'utf8');
var lines = input.split(/\r?\n/);

var a1 = (input.split(/\r?\n/)[0]).split(' ')[0];
var b1 = (input.split(/\r?\n/)[0]).split(' ')[1];
var c1 = (input.split(/\r?\n/)[0]).split(' ')[2];
var a2 = (input.split(/\r?\n/)[1]).split(' ')[0];
var b2 = (input.split(/\r?\n/)[1]).split(' ')[1];
var c2 = (input.split(/\r?\n/)[1]).split(' ')[2];

console.log('VALOR A PAGAR: R$ ' + (((b1*c1)+(b2*c2)).toFixed(2)))
