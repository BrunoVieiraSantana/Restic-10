console.log('Questão 03')
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
    if (b !== 0) {
      return a / b;
    } else {
      return "Não é possível dividir por zero.";
    }
  }
  
  function calculadora(operacao, a, b) {
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
  

  console.log(calculadora('soma', 5, 3)); 
  console.log(calculadora('subtracao', 7, 2)); 
  console.log(calculadora('multiplicacao', 4, 6)); 
  console.log(calculadora('divisao', 8, 2)); 
  console.log(calculadora('divisao', 8, 0)); 
  

