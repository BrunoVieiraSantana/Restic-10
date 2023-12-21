const fs = require('fs');

function readCSV(file) {
  const content = fs.readFileSync(file, 'utf-8');
  return content.trim().split('\n').map(line => line.split(','));
}

function getUsersAndAddresses() {
  try {
    const usersData = readCSV('users.csv');
    const addressData = readCSV('address.csv');

    const users = {};
    const addresses = {};

    for (let i = 0; i < usersData.length; i++) {
      const user = usersData[i];
      const id = user[0];
      const name = user[1];
      users[id] = name;
    }

    for (let i = 0; i < addressData.length; i++) {
      const address = addressData[i];
      const id = address[0];
      const addressText = address[1];
      addresses[id] = addressText;
    }

    for (const userId in users) {
      const userName = users[userId];
      const userAddress = addresses[userId];

      console.log('Usuário: ' + userName);
      console.log('Endereço: ' + userAddress + '\n');
    }

  } catch (error) {
    console.error('Erro ao ler os arquivos:', error.message);
  }
}

getUsersAndAddresses();
