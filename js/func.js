console.clear()

function bomDia(name){
    console.log('Bom dia, '+ name+'!')
}

bomDia('Bruno Vieira')

function quadrado(valor){
    return valor*valor
}

console.log (quadrado(10))

function juros(valor, porcentagem){
    const valorDeAcrecimo = (porcentagem / 100) * valor
    return valor + valorDeAcrecimo
}

console.log (juros(100,15))