import { soma, subtracao, multiplicacao, divisao } from './operacoes.js';

export function calculadora(operacao, a, b) {
  switch (operacao) {
    case 'soma':
      return soma(a, b);
    case 'subtracao':
      return subtracao(a, b);
    case 'multiplicacao':
      return multiplicacao(a, b);
    case 'divisao':
      return divisao(a, b);
    default:
      return 'Operação inválida. Escolha entre "soma", "subtracao", "multiplicacao" ou "divisao".';
  }
}
