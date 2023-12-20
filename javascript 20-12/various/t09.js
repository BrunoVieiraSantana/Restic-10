console.log('Questão 08')

const products = [
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
]

for (let index = 0; index < products.length; index++) {
    if (products[index].price < 10.5 ) 
    console.log(products[index])
}