const operacoes = require('./operacoes');

function calculadora(operacao, a, b) {
  switch (operacao) {
    case 'soma':
      return operacoes.soma(a, b);
    case 'subtracao':
      return operacoes.subtracao(a, b);
    case 'multiplicacao':
      return operacoes.multiplicacao(a, b);
    case 'divisao':
      return operacoes.divisao(a, b);
    default:
      return 'Operação inválida. Escolha entre "soma", "subtracao", "multiplicacao" ou "divisao".';
  }
}

module.exports = calculadora;
