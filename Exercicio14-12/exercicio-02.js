// # Exercício JS 2

// ## 1. A partir do código abaixo, desenvolva um algoritmo que imprima na tela se a soma de a + b é menor que c:

console.log('Questão 01')

const a = 5
const b = 7
const c = 12
const d = a + b

if (d > c){
    console.log('a + b é maior que c')
} else if (d < c){
    console.log('a + b é menor que c')
} else {
    console.log('O número é igual ou invalido')
}

console.log('')
// ## ***Observação:** altere os valores das constantes **a**, **b** e **c** explorando possíveis casos.*

// ## 2. A partir do código abaixo, desenvolva um algoritmo que retorna os dados do usuário seguindo as restrições listadas:
// 

console.log('Questão 02')

const user = {
    name: 'Carlos Júnior',
    sex: 'masculino',
    age: 26
}

if (user.name.length <= 0){
    console.log('O usuário não tem nome registrado!')
} else if (user.sex.length <= 0){
    console.log('O usuário não tem sexo registrado!')
} else if (user.age.length <= 0){
    console.log('O usuário não tem idade registrado!')
} else {
    console.log(`O usuário ${user.name} do sexo ${user.sex} tem ${user.age} anos!`)
}

console.log('')
// **Restrições:**
// - Se o usuário não tiver nome registrado, imprima no terminal a seguinte mensagem: **O usuário não tem nome registrado!**.
// - Se o usuário não tiver sexo registrado, imprima no terminal a seguinte mensagem: **O usuário não tem sexo registrado!**.
// - Se o usuário não tiver idade registrada, imprima no terminal a seguinte mensagem: **O usuário não tem idade registrada!**.
// - Se o usuário possuir todos os dados registrados, imprima no terminal a seguinte mensagem: **O usuário {name} do sexo {sex} tem {age} ano(s)!**. Onde **{name}**, **{sex}** e **{age}** são os valores das propriedades do usuário.

// ## ***Observação:** altere os valores do objeto **user** explorando possíveis casos.*

// ## 3. A partir do algoritmo criado na questão anterior, adicione as seguintes restrições:
// **Restrições:**
// - Se o nome do usuário **não** for uma **string**, imprima no terminal a seguinte mensagem: **O nome do usuário foi registrado com formato errado. Deve ser string!**.
// - Se o sexo do usuário **não** for uma **string**, imprima no terminal a seguinte mensagem: **O sexo do usuário foi registrado com formato errado. Deve ser string!**.
// - Se a idade do usuário **não** for um **number**, imprima no terminal a seguinte mensagem: **A idade do usuário foi registrada com formato errado. Deve ser number!**.

// ## ***Observação:** altere os valores do objeto **user** explorando possíveis casos.*
console.log('Questão 03')

if (typeof(user.name) !== "string"){
    console.log('O nome do usuário foi registrado com formato errado. Deve ser string!')
} else if (typeof(user.sex) !== "string"){
    console.log('O sexo do usuário foi registrado com formato errado. Deve ser string!')
} else if (typeof(user.age) !== "number"){
    console.log('A idade do usuário foi registrada com formato errado. Deve ser number!')
}else {
    console.log(`Todos os requisitos do usuário ${user.name} foram atendidos`)
}

console.log('')
// ## 4. A partir do algoritmo criado na questão anterior, refatore-o para que seja utilizada apenas 3 condicionais.
console.log('Questão 04')
console.log('')
// ## ***Observação:** altere os valores do objeto **user** explorando possíveis casos.*

// ## 5. A partir do código abaixo, desenvolva um algoritmo que imprima no terminal se o número sorteado está entre os números 5 e 10, incluindo ambos:

const number = Math.floor(Math.random() * 11) // sorteia um número inteiro entre 0 e 10 (incluindo 0 e 10)
console.log('Questão 05')

if (number >= 5){
    console.log(`o número sorteado ${number} está entre os números 5 e 10`)
} else {
    console.log(`o número sorteado ${number} NÂO está entre os números 5 e 10`)
}

console.log('')
// ## 6. A partir do código abaixo, desenvolva um algoritmo que imprima no terminal se o número é par ou ímpar:
console.log('Questão 06')

const numero = 2
const ePar = (numero % 2) === 0;

if (numero === 0) {
    console.log('O número é inválido')
} else if (ePar) {
    console.log(numero+' é par')
} else {
    console.log(numero+' é impar')
}

console.log('')
// ## ***Observação:** altere os valores da constante **number** explorando possíveis casos.*

// ## 7. A partir do código abaixo, desenvolva um algoritmo utilizando a estrutura de repetição **while** que imprima no terminal apenas os produtos com o preço abaixo de R$ 10,50:
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
    contador++
    if (products[contador].price < 10.5 ) 
    console.log(products[contador])
}

console.log('')

// ## ***Observação:** altere os valores da constante **products** explorando possíveis casos.*

// ## 8. A partir do algoritmo criado na questão anterior, refatore-o para utilizar o laço de repetição **for**.
console.log('Questão 08')

for (let index = 0; index < products.length; index++) {
    if (products[index].price < 10.5 ) 
    console.log(products[index])
}

console.log('')

// ## ***Observação:** altere os valores da constante **products** explorando possíveis casos.*

// ## 9. A partir do código abaixo, desenvolva um algoritmo que imprima no terminal o resultado do fatorial do número. Por exemplo: 5! = 5 x 4 x 3 x 2 x 1 = 120. Sendo assim, o valor 120 deve ser impresso no terminal:
console.log('Questão 09')

const numero02 = 5
let resultado = 1

for (let index = numero02; index > 0; index--) {
    resultado = resultado * index;
    // resultado *= index;    
}

console.log(`${numero02} fatorial é igual à ${resultado}`)

console.log('')
// ## ***Observação:** altere os valores da constante **number** explorando possíveis casos.*

// ## 10. A partir do código abaixo, desenvolva um algoritmo que imprima no terminal a lista de produtos ordenada crescentemente pelo preço:
console.log('Questão 10')
console.log('')

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
]

temp = []
for (let index = 0; index < products02.length -1; index++) {
    for (let index2 = index + 1; index2 < products02.length; index2++){
        if (products02[index].price > products02[index2].price) {
            const temp = products02[index]
            products02[index] = products02[index2]
            products02[index2] = temp

        }
    }
}

console.log(products02)

// ## Observação: altere os valores da constante **products** explorando possíveis casos.