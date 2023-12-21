console.clear()

let x = 20
let y = 7

let teste1 = Math.floor(x/y)
let teste2 = x%y
let teste3 = (x-(x%y))/y

console.log('O cociente usando Math.floor é ' + teste1)
console.log('O resto usando o operador % é ' + teste2)
console.log('O cociente usando expressão matematica é ' + teste3)

let teste4 = 3 == '3'
console.log('')
console.log(teste4)

let teste5 = 3 !== '3'
console.log('')
console.log(teste5)

let b = 4
let c = 4

let teste6 = '1'+'3'

console.log(teste6)


let login = {nome:'bruno', senha:1234}
console.log(login)

let colour = 'green'
switch(colour){
    case 'red':
        console.log('A cor é ', colour)
        break
    case 'blue':
        console.log('A cor é ', colour)
        break
    default:
        console.log('Nenhuma cor foi selecionada')
}

