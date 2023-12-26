let nome = '                  BRUNO       vIeIrA        Da  silva e dos sanTos         '
let nome2 = nome.trim()
let lines = nome2.split(/\s+/)
let formatado = []

function nomes (linha){
for (let index = 0; index < linha.length; index++) {
    if (linha[index] == 'de' || linha[index] == 'da'  || linha[index] == 'e' || linha[index] == 'das' || linha[index] == 'dos' ||linha[index] == 'De' || linha[index] == 'Da'  || linha[index] == 'E' || linha[index] == 'Das' || linha[index] == 'Dos' || linha[index] == 'DE' || linha[index] == 'DA' || linha[index] == 'DAS' || linha[index] == 'DOS' || linha[index] == 'dE' || linha[index] == 'dA'  || linha[index] == 'daS' || linha[index] == 'doS' ){
        formatado.push(linha[index].toLowerCase())
    } else {
        formatado.push(linha[index][0].toUpperCase() + linha[index].substring(1).toLowerCase())
    }
} 
}
nomes(lines)

console.log(formatado.join(' '))
