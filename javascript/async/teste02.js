console.log('Questão 01')
let n1=10
let n2='t'

function temporizador (resolve){
    setTimeout(function(){
        console.log('contagem finalizada!')
        resolve()
    },2000)
}

async function soma(){
    console.log('inicio')
    try {
        if(typeof n1 !== "number" || typeof n2 !== "number"){
            console.log('Você deve usar números')
        } else {
            await new Promise(temporizador)
            console.log(`Fim da soma, resultado: ${n1+n2}`)
        }
    } catch (error) {console.log('Erro encontrado!', error)}

}

soma()