/*/
- A mensagem "O primeiro parâmetro deve ser uma lista!", caso o primeiro parâmetro **não** seja uma lista
- A mensagem "O segundo parâmetro deve ser uma lista!", caso o segundo parâmetro **não** seja uma lista
- Uma lista com todos os números que estão em ambas as listas, caso os parâmetros estejam no formato correto
- Uma lista vazia, caso não haja números que estão em ambas as listas
/*/
const numbers1 = [1, 2, 3, 3, 2, 4, 0]
const numbers2 = [1, 2, 3, 5, 10]


const intersection = numbers1.filter((item1) =>
  numbers2.some((item2) => item1 === item2)
)

console.log(...new Set(intersection))

/*/
function innerJoin (list01, list02){

}

//console.log(innerJoin(numbers1, numbers2))
/* resultado no terminal deve ser:
[1, 2, 3]
*/

//console.log(innerJoin([], numbers2))
/* resultado no terminal deve ser:
[]
*/

//console.log(innerJoin(2, numbers2))
/* resultado no terminal deve ser:
O primeiro parâmetro deve ser uma lista!
*/
