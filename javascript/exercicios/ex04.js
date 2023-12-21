console.log('Questão 01');


function showProductsInfo(products) {
    if (!Array.isArray(products)) {
        return "O parâmetro deve ser uma lista!";
    }

    if (products.length === 0) {
        return "A lista não possui produtos!";
    }

    const formattedInfo = products.map(product => {
        return `
Id do produto: ${product.id}
Nome do produto: ${product.name}
Preço do produto: R$ ${product.price.toFixed(2)}
`;
    });

    return formattedInfo.join("");
}

const products = [
    {
        id: 1,
        name: 'Jogo de Panelas',
        price: 54.59
    },
    {
        id: 2,
        name: 'Chocolate L',
        price: 14.99
    },
    {
        id: 3,
        name: 'Sabão Lili',
        price: 29.99
    }
];

console.log(showProductsInfo(products));

console.log(showProductsInfo([]));

console.log(showProductsInfo(2));

console.log('');
console.log('Questão 02');
function findUserById(users, userId) {
    if (!Array.isArray(users)) {
        return "O primeiro parâmetro deve ser uma lista!";
    }

    if (typeof userId !== 'number') {
        return "O segundo parâmetro deve ser um número!";
    }

    const user = users.find(user => user.id === userId);

    return user || null;
}

const users = [
    {
        id: 1,
        name: 'Carlos Júnior',
        age: 26
    },
    {
        id: 2,
        name: 'Ceverino Cordeiro',
        age: 70
    }
];

console.log(findUserById(users, 2));

console.log(findUserById(users, 5));

console.log(findUserById(users, '2'));


console.log('');
console.log('Questão 03');
function filterProductByName(products2, productName) {
    if (!Array.isArray(products2)) {
        return "O primeiro parâmetro deve ser uma lista!";
    }

    if (typeof productName !== 'string') {
        return "O segundo parâmetro deve ser uma string!";
    }

    const filteredProducts = products2.filter(product2 =>
        product2.name.toLowerCase().includes(productName.toLowerCase())
    );

    return filteredProducts;
}


const products2 = [
    {
        id: 1,
        name: 'Jogo de Panelas',
        price: 54.59
    },
    {
        id: 2,
        name: 'Chocolate L',
        price: 14.99
    },
    {
        id: 3,
        name: 'Sabão Lili',
        price: 29.99
    }
];

console.log(filterProductByName(products2, 'cho'));

console.log(filterProductByName(products2, 'Arroz'));

console.log(filterProductByName(products2, 2));


console.log('');
console.log('Questão 04');
function mapProductsRemoveId(products3) {
    if (!Array.isArray(products3)) {
      return "O parâmetro deve ser uma lista!";
    }
  
    return products.map(product3 => {
      const { id, ...productWithoutId } = product3;
      return productWithoutId;
    });
  }
  

  const products3 = [
    {
      id: 1,
      name: 'Jogo de Panelas',
      price: 54.59
    },
    {
      id: 2,
      name: 'Chocolate L',
      price: 14.99
    },
    {
      id: 3,
      name: 'Sabão Lili',
      price: 29.99
    }
  ];
  
  console.log(mapProductsRemoveId(products3));
  
  console.log(mapProductsRemoveId([]));
  
  console.log(mapProductsRemoveId(2));
  

console.log('');
console.log('Questão 05');
function sumProductsPrice(products4) {
    if (!Array.isArray(products4)) {
        return "O parâmetro deve ser uma lista!";
    }

    const totalPrice = products4.reduce((accumulator, product4) => {
        return accumulator + (product4.price || 0);
    }, 0);

    return totalPrice;
}

const products4 = [
    {
        id: 1,
        name: 'Jogo de Panelas',
        price: 54.59
    },
    {
        id: 2,
        name: 'Chocolate L',
        price: 14.99
    },
    {
        id: 3,
        name: 'Sabão Lili',
        price: 29.99
    }
];

console.log(sumProductsPrice(products4)); 
console.log(sumProductsPrice([])); 
console.log(sumProductsPrice(2)); 
