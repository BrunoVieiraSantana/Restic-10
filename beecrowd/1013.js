let input = require('fs').readFileSync('input1013.txt', 'utf8');
let lines = input.split(/\r?\n/);

let numbers = input.split(' ')
let a = parseFloat(numbers[0]);
let b = parseFloat(numbers[1]);
let c = parseFloat(numbers[2]);

let resultado = ( a + b  + Math.abs( a - b )) / 2
let resultado2 = ( resultado + c  + Math.abs( resultado - c )) / 2

console.log(`${resultado2} eh o maior`)

