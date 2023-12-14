console.log('Questão 10');
console.log('');

const products02 = [
    {
        name: 'Caixa de Sabão Z',
        price: 30.99
    },
    {
        name: 'Chocolate X',
        price: 10.4
    },
    {
        name: 'Arroz T',
        price: 8.3
    },
    {
        name: 'Salgadinho F',
        price: 10.5
    }
];

// Ordenar a lista de produtos pelo preço (crescente)
for (let i = 0; i < products02.length - 1; i++) {
    for (let j = i + 1; j < products02.length; j++) {
        if (products02[i].price > products02[j].price) {
            // Trocar os elementos de posição se estiverem fora de ordem
            const temp = products02[i];
            products02[i] = products02[j];
            products02[j] = temp;
        }
    }
}

// Imprimir a lista ordenada
for (let i = 0; i < products02.length; i++) {
    console.log(`Nome: ${products02[i].name}, Preço: ${products02[i].price}`);
}


// A ideia do bubble sort é percorrer a lista várias vezes, comparando elementos adjacentes e trocando-os se estiverem fora de ordem, até que a lista esteja completamente ordenada. Aqui está uma explicação detalhada linha por linha:

// for (let i = 0; i < products02.length - 1; i++) {: Este é o início do primeiro loop for. Ele percorre a lista de produtos. A variável i é o índice atual na lista e começa com zero. A condição i < products02.length - 1 garante que não tentaremos acessar um índice fora do alcance da lista.

// for (let j = i + 1; j < products02.length; j++) {: Este é o início do segundo loop for aninhado dentro do primeiro. Ele começa de i + 1 para evitar comparações redundantes e garantir que não estamos comparando um elemento consigo mesmo. Novamente, a condição j < products02.length evita acessar um índice fora do alcance da lista.

// if (products02[i].price > products02[j].price) {: Esta é uma condição if que verifica se o preço do produto no índice i é maior que o preço do produto no índice j. Se isso for verdadeiro, significa que os elementos estão fora de ordem e precisam ser trocados.

// const temp = products02[i];: Cria uma variável temporária chamada temp para armazenar temporariamente o valor do elemento no índice i.

// products02[i] = products02[j];: Substitui o elemento no índice i pelo elemento no índice j.

// products02[j] = temp;: Substitui o elemento no índice j pelo valor armazenado na variável temporária temp, que era o valor original no índice i.

// Essencialmente, essas três linhas dentro do bloco if fazem a troca de posição entre dois elementos na lista quando eles estão fora de ordem.

// O resultado final é que, após a execução desses loops, a lista products02 estará ordenada pelo preço em ordem crescente.