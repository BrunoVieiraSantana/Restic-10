let array = [{id:1, nome:"Darlan", idade:30, aprovadoTeste: true}, {id:2, nome:"Victoria", idade:17, aprovadoTeste: false}, {id:3, nome:"Iago", idade:26, aprovadoTeste: true}]

function teste (lista){
for (let index = 0; index < lista.length; index++) {

    if (lista[index].idade > 18 && lista[index].aprovadoTeste === true && lista[index].idade !== ''){
        console.log(`id:${lista[index].id} nome:${lista[index].nome}`)
      }  
    }
} 

teste(array)