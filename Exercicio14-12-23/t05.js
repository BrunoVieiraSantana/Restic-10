let lista = [7,5,10,6,8]

for (let index = 0; index < lista.length -1; index++) {
    for (let index2 = index + 1; index2 < lista.length; index2++){
        if (lista[index] > lista[index2]){
            let temp = lista[index]
            lista[index] = lista[index2]
            lista[index2] = temp
    }
    }
    
}

console.log(lista)
