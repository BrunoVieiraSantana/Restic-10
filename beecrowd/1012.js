let input = require('fs').readFileSync('input1012.txt', 'utf8');
let lines = input.split(/\r?\n/);

let numbers = input.split(' ')
let a = parseFloat(numbers[0]);
let b = parseFloat(numbers[1]);
let c = parseFloat(numbers[2]);

let pi = parseFloat(3.14159);
let TRIANGULO = (1/2) * a * c
let CIRCULO = pi * c**2
let TRAPEZIO = (1/2) * (a + b) * c
let QUADRADO = b**2
let RETANGULO = a * b

console.log('TRIANGULO: ' + (TRIANGULO).toFixed(3))
console.log('CIRCULO: ' + (CIRCULO).toFixed(3))
console.log('TRAPEZIO: ' + (TRAPEZIO).toFixed(3))
console.log('QUADRADO: ' + (QUADRADO).toFixed(3))
console.log('RETANGULO: ' + (RETANGULO).toFixed(3))
