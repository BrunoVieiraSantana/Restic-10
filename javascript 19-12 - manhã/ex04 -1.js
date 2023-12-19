console.log('Questão 01');

const products = [
    {
        id: 1,
        name: 'Jogo de Panelas',
        price: 54.59
    },
    {
        id: 2,
        name: 'Chocolate L',
        price: 14.99
    },
    {
        id: 3,
        name: 'Sabão Lili',
        price: 29.99
    }
]

function showProductsInfo (prod){
    if (!Array.isArray(prod)){
        return "O parâmetro deve ser uma lista!"
    }
    if (prod.length === 0){
        return "A lista não possui produtos!"
    }
    return "Esta é a primeira linha.\nEsta é a segunda linha."
}


console.log(showProductsInfo(products))
/*/
Id do produto: 1
Nome do produto: Jogo de Panelas
Preço do produto: R$ 54.59

Id do produto: 2
Nome do produto: Chocolate L
Preço do produto: R$ 14.99

Id do produto: 3
Nome do produto: Sabão Lili
Preço do produto: R$ 29.99
/*/

console.log(showProductsInfo([]))
//A lista não possui produtos!

console.log(showProductsInfo(2))
//O parâmetro deve ser uma lista!
