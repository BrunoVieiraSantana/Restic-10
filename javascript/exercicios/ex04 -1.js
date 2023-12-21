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
    return `Id do produto: ${prod.id}
    Nome do produto: ${prod.name}
    Preço do produto: R$ ${prod.price}`
}


const orgProducts = products.map(showProductsInfo)

function executar (prod){
    if (!Array.isArray(prod)){
        return "O parâmetro deve ser uma lista!"
    }
    if (prod.length === 0){
        return "A lista não possui produtos!"
    } else
    return orgProducts.join("")
}

let products2 = []
let products3 = 2

console.log(executar(products))
console.log(executar(products2))
console.log(executar(products3))
