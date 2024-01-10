const products = [
    { id: 1, name: 'Produto 1', description: 'Descrição do Produto 1', img: 'img/01.png', price: 10.99 },
    { id: 2, name: 'Produto 2', description: 'Descrição do Produto 2', img: 'img/01.png', price: 12.99 },
    { id: 3, name: 'Produto 3', description: 'Descrição do Produto 3', img: 'img/01.png', price: 15.99 },
    { id: 4, name: 'Produto 4', description: 'Descrição do Produto 4', img: 'img/01.png', price: 18.99 },
];

let totalItems = 0;

const App = document.getElementById('app');

function updateCart() {
    const cart = document.getElementById('cart');
    cart.textContent = `Carrinho (${totalItems} itens)`;
}

function updateTotal() {
    const totalElement = document.getElementById('total');
    const totalPrice = products.reduce((sum, product) => sum + (product.quantity || 0) * product.price, 0).toFixed(2);
    totalElement.textContent = `Total: $${totalPrice}`;
}

function renderProducts() {
    const container = document.createElement('div');
    container.classList.add('container');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const img = document.createElement('img');
        img.classList.add('product-img');
        img.src = product.img;
        card.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = product.name;
        card.appendChild(name);

        const description = document.createElement('p');
        description.textContent = product.description;
        card.appendChild(description);

        const price = document.createElement('p');
        price.textContent = `$${product.price.toFixed(2)}`;
        card.appendChild(price);

        const addButton = document.createElement('button');
        addButton.textContent = 'Adicionar';
        addButton.addEventListener('click', () => {
            product.quantity = (product.quantity || 0) + 1;
            totalItems++;
            updateCart();
            updateTotal();
        });
        card.appendChild(addButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', () => {
            if (product.quantity > 0) {
                product.quantity--;
                totalItems--;
                updateCart();
                updateTotal();
            }
        });
        card.appendChild(removeButton);

        container.appendChild(card);
    });

    App.appendChild(container);
}

function renderCart() {
    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart');

    const cartButton = document.createElement('button');
    cartButton.id = 'cart';
    cartButton.textContent = 'Carrinho (0 itens)';
    cartContainer.appendChild(cartButton);

    const totalElement = document.createElement('p');
    totalElement.id = 'total';
    totalElement.textContent = 'Total: $0.00';
    cartContainer.appendChild(totalElement);

    App.appendChild(cartContainer);
}

renderProducts();
renderCart();
