const numero = 10;

const ePar = (numero % 2) === 0;

if (numero === 0) {
    console.log('O número é inválido')
} else if (ePar) {
    console.log(numero+' é par')
} else {
    console.log(numero+' é impar')
}


