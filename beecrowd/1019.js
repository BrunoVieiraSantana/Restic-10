let input = require('fs').readFileSync('input1019.txt', 'utf8');
let lines = input.split(/\r?\n/);

let n = parseInt(lines.shift());
let h = Math.floor(n/3600)
let m = Math.floor((n-(h*3600))/60)
let s = Math.floor((n-(h*3600+m*60))/1)

console.log(`${h}:${m}:${s}`)