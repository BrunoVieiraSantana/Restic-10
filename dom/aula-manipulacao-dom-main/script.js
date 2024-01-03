    //Acesso e manipulação do DOM 
    // Por Id 
    //console.log(document.getElementById("listaItens"))

    //Por Class o retorn é um Array Like assim como encontrado em arguments de uma função
   let primeiroItem = document.getElementsByClassName("item")[0]
    console.log(primeiroItem.innerHTML)
    //Query Selector elemento único
    //console.log(document.querySelector(".item"))
  
    //Query Selector All
    //console.log(document.querySelectorAll(".item"))
    //TagName
    //console.log(document.getElementsByTagName("li"))
    // Seleciona o botão e a lista pelo ID
    let btnAdicionarItem = document.getElementById('adicionarItem');
    //let listaItens = document.getElementById('listaItens');

    let items = listaItens.childNodes // Lista de items do nó
    // Adiciona um ouvinte de evento de clique ao botão
    btnAdicionarItem.addEventListener('click', function () {
        // Cria um novo elemento li
        let novoItem = document.createElement('li');

        // Adiciona texto ao novo item
        let textoNovoItem = document.createTextNode('Novo Item');

        // Adiciona o texto como filho do novo item
        novoItem.appendChild(textoNovoItem);

        // Adiciona o novo item à lista
        listaItens.appendChild(novoItem);
    });
   
        
 

       
        
// function removerItem(){
//     listaItens.removeChild(items[2])
// }
function marcarComoFeito(){
    let input = document.getElementById("input")
    console.log(input.required)
    let item = document.getElementsByClassName("item")[input.value - 1]
    item.style = "color:green"
}