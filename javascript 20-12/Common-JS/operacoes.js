function soma(a, b) {
    return a + b;
  }
  
function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b !== 0 && a !== 0) {
    return a / b;
  } else {
    return "Não é possível dividir por zero.";
  }
}

module.exports = {
  soma,
  subtracao,
  multiplicacao,
  divisao
};
