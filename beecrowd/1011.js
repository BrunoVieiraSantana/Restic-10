let input = require('fs').readFileSync('input1011.txt', 'utf8');
let lines = input.split(/\r?\n/);

let pi = parseFloat(3.14159);
let R3 = lines.shift();
let volume = (4/3.0) * pi * R3**3

console.log('VOLUME = ' + (volume).toFixed(3))
