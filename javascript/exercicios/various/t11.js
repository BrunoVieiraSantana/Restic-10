function org (...params){
    let array = params
    for (let i = 0; i<array.length; i++){
        if (array[i]>array[i+1]){
            let temp = array[i+1]
            array[i+1] = array[i]
            array[i] = temp
            i=-1
        }
    }
}

