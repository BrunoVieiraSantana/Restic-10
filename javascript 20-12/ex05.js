console.log('Questão 01')
function funcaoPrincipal(array, funcaoCallback) {
    const numerosFiltrados = array.filter(funcaoCallback);
    
    return numerosFiltrados;
  }
  
  function funcaoCallback(numero) {
    return numero > 0;
  }
  
  let numeros = [-2, 3, 0, 4, 2 - 1, -4, 8];
  let numerosPositivos = funcaoPrincipal(numeros, funcaoCallback);
  
  console.log(numerosPositivos); 

  console.log('')
  console.log('Questão 02')
  function mapeaCompra(compra, produtos) {
    const produtoEncontrado = produtos.find(produto => produto.id === compra.produto_id);
  
    if (produtoEncontrado) {
      return {
        id: compra.id,
        produto: {
          id: produtoEncontrado.id,
          nome: produtoEncontrado.nome,
          peso: produtoEncontrado.peso
        },
        qtd: compra.qtd
      };
    }
  
    return null;
  }
  
  function mapearCompras(compras, produtos, callback) {
    return compras.map(compra => callback(compra, produtos)).filter(Boolean);
  }
  
  let produtos = [
    { id: 1, nome: "Traquinas", peso: "500g" },
    { id: 2, nome: "Negresco", peso: "300g" },
    { id: 3, nome: "Floresta Negra", peso: "370g" }
  ];
  
  let compras = [
    { id: 1, produto_id: 1, qtd: 3 },
    { id: 2, produto_id: 2, qtd: 4 }
  ];
  
  let comprasMapeadas = mapearCompras(compras, produtos, mapeaCompra);
  
  console.log(comprasMapeadas);
  

  console.log('')
  console.log('Questão 03')
  function somatorioNumerosImpares(array) {
    let soma = 0;
  
    array.filter(numero => numero % 2 !== 0)
         .forEach(numero => soma += numero);
  
    return soma;
  }
  
  let numeros01 = [0, 2, 1, 5, 7, 0, 2, 21, 1, 3];
  let resultado01 = somatorioNumerosImpares(numeros01);
  
  console.log(resultado01); // 
  

  console.log('')
  console.log('Questão 04')
  function somatorioNumerosImpares(array) {
    const resultado = array.reduce(function (acumulador, numero) {
      if (numero % 2 !== 0) {
        return acumulador + numero;
      }
      return acumulador;
    }, 0); 
  
    return resultado;
  }
  
  let numeros02 = [0, 2, 1, 5, 7, 0, 2, 21, 1, 3];
  let resultado = somatorioNumerosImpares(numeros02);
  console.log(resultado);

  console.log('')
  console.log('Questão 05')
  function selecionaInadimplentes(usuarios) {
    const inadimplentes = usuarios.filter(usuario => usuario.pagamento === "pendente");

    const nomesInadimplentes = inadimplentes.map(usuario => usuario.nome);

    return nomesInadimplentes;
}

let usuarios = [
    { id: 1, nome: "Fulano de Tal", pagamento: "pendente" },
    { id: 2, nome: "Ronaldo Nazário", pagamento: "pago" },
    { id: 3, nome: "Michael Jordan", pagamento: "pago" },
    { id: 4, nome: "Maria Rios", pagamento: "pago" },
    { id: 5, nome: "Julia Sousa", pagamento: "pago" },
    { id: 6, nome: "José Neymar", pagamento: "pendente" },
    { id: 7, nome: "Mariana Riacho", pagamento: "pago" },
    { id: 8, nome: "Fabiana Beatriz", pagamento: "pendente" },
];

let inadimplentes = selecionaInadimplentes(usuarios);
console.log(inadimplentes); 
