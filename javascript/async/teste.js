console.log('Questão 01')
n1=10
n2=5

function temporizador (resolve){
    setTimeout(function(){
        console.log('contagem finalizada!')
        resolve()
    },2000)
}

async function soma(){
    console.log('inicio')
    await new Promise(temporizador)
    console.log(`Fim da soma, resultado: ${n1+n2}`)
}

soma()