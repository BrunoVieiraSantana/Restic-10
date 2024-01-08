import readline from 'readline';


const interfaceDeUsuario = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pessoas = [];

function mostrarMenu() {
  console.log('1 - Listar pessoas');
  console.log('2 - Adicionar uma pessoa');
  console.log('3 - Sair');
}

function listarPessoas() {
  console.log('Lista de pessoas:');
  pessoas.forEach((pessoa, index) => {
    console.log(`${index + 1}. Nome: ${pessoa.nome}, Telefone: ${pessoa.telefone}, Email: ${pessoa.email}`);
  });
}

function adicionarPessoa() {
  interfaceDeUsuario.question('Digite o nome da pessoa: ', (nome) => {
    interfaceDeUsuario.question('Digite o telefone da pessoa: ', (telefone) => {
      interfaceDeUsuario.question('Digite o email da pessoa: ', (email) => {
        const novaPessoa = { nome, telefone, email };
        pessoas.push(novaPessoa);
        console.log(`Pessoa ${nome} adicionada com sucesso.`);
        mostrarMenu();
        iniciarInterface();
      });
    });
  });
}

function iniciarInterface() {
  interfaceDeUsuario.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        console.clear()
        listarPessoas();
        mostrarMenu();
        iniciarInterface();
        break;
      case '2':
        console.clear()
        adicionarPessoa();
        break;
      case '3':
        console.clear()
        console.log('Encerrando o programa.');
        interfaceDeUsuario.close();
        break;
      default:
        console.log('Opção inválida. Por favor, escolha novamente.');
        mostrarMenu();
        iniciarInterface();
    }
  });
}

mostrarMenu();
iniciarInterface();
