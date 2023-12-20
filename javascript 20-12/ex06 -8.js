const fs = require('fs').promises;

function lerArquivo() {
  fs.readFile('./users.csv', 'utf-8')
    .then(usersString => {
      console.log(usersString);
    })
    .catch(error => {
      console.error('Erro ao ler o arquivo:', error);
    });
}

lerArquivo();

