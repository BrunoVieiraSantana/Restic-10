/*/
## 2. A partir do exercício 1, crie uma função que receba dois parâmetros:
- Estrutura que você escolheu no exercício 1
- Um número que representará o índice do compartimento da estante
## A função deve retornar:
- As informações de todas as caixas que estão no compartimento solicitado
/*/

let estante = [[1,2,3],[4,5,6],[7,8,9]]
console.log('questão 1')
console.log(estante[0])
console.log(estante[1])
console.log(estante[2])

console.log('questão 2')
function pegar (list, loc1){
    return list[loc1]
}

console.log(pegar(estante, 1))

console.log('questão 3')
function pegar2 (list, loc1){
    for (let index = 0; index < 3; index++) {
        console.log(list[index][loc1])   
    }
}

pegar2(estante, 1)

console.log('questão 4')
//https://pt.stackoverflow.com/questions/454993/calcular-soma-da-diagonal-principal-de-uma-matriz-em-javascript-node

function pegar3(matriz) {
    const count = matriz.length
    for(let i = 0; i < count; i++) {
      console.log(matriz[i][i])
    }
  }
  pegar3(estante)

  console.log('questão 5')
function pegar4(matriz) {
    const count = matriz.length;
    for (let i = 0; i < count; i++) {
        console.log(matriz[i][count - 1 - i]);
    }
}

pegar4(estante);



  
