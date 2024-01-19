let input = require('fs').readFileSync('input1020.txt', 'utf8');
let lines = input.split(/\r?\n/);

let n = parseInt(lines.shift());
let ano = 365
let mes = 30

let anoR = Math.floor(n/365)
let mesR = Math.floor((n%365)/30)
let diaR = Math.floor((n%365)%30)

console.log(`${anoR} ano(s)
${mesR} mes(es)
${diaR} dia(s)`)
