let valorG = 5.87;
let valorE = 6.65;
let kmPorLitro = 10;
let distEmKm = 100;
let tipoCombustivel = 'Etanol';

let litrosConsumidos = distEmKm / kmPorLitro;
let valorGasto

if (tipoCombustivel === 'Etanol') {
    valorGasto = litrosConsumidos*valorE;
} else {
    valorGasto = litrosConsumidos*valorG;
}

console.log(valorGasto.toFixed(2)+' R$');


