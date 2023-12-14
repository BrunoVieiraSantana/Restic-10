console.log('Questão 07')

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

let contador = 0
while (contador < products.length-1) {
    contador = contador +1
    if (products[contador].price < 10.5 ) 
    console.log(products[contador])
}
