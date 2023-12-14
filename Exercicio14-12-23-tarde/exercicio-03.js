console.log('Questão 01')
temp = []
function org (n1, n2, n3, n4, n5){
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index].length<3){
            console.log('O nome deve ter no minimo 3 letras')
        } else if (typeof arguments[index] !== 'string'){
            console.log('O nome deve possuir letras')
        } else
            temp.push(arguments[index])   
    }
    console.log(temp.sort())
}
org('Leon', 'Ashley', 'Ada', 'Claire', 'Sherry')


console.log('')

console.log('Questão 02')
let numeros = [1, 2, 4, 5, 3, 2, 7, 9, 0, 2]
function calc (){

}
