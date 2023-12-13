//lista ({nome:'Venus', idade:17}, {nome:'Bruno', idade:30})//
//https://woliveiras.com.br/posts/la%C3%A7os-de-repeti%C3%A7%C3%A3o-for-for-in-for-of///

const usuarios = [
    {nome: "Robinson", idade: 18},
    {nome: "William", idade: 28},
    {nome: "Janaina", idade: 19},
    {nome: "Carla", idade: 25},
    {nome: "Maíra", idade: 32},
    {nome: "George", idade: 30},
    {nome: "Camila", idade: 27},
    {nome: "Carlinhos", idade: 22},
    {nome: "Jamilso", idade: 29},
    {nome: "Claudio", idade: 30}
];


const quantidadeDeUsuarios = usuarios.length;

for (let i = 0; i < quantidadeDeUsuarios; i++) {
	console.log(usuarios[i].nome);
	console.log(usuarios[i].idade);
}
