let numbers = [1, 2, 3, 3, 2, 4, 0]
let numbers2 = []

function uniqueValues(list){
    if (!Array.isArray(list)){
        console.log('O parâmetro deve ser uma lista!')
    } else if (list.length == 0){
        console.log('[]')
    } else {
        let number = new Set(list)
        console.log(number)
    }
}

uniqueValues(numbers)
uniqueValues(numbers2)
uniqueValues(2)



