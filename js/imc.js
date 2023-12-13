const peso = 63;
const altura = 1.75;
const imc = peso / Math.pow(altura, 2);

/*/
const imc = peso / (altura*altura);
/*/

console.log('O imc da pessoa é '+imc.toFixed(2));

if (imc<18.5) {
    console.log('Abaixo do peso')
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal')
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do Peso')
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso')
} else if (imc >= 40) {
    console.log('Obesidade grave')
}
