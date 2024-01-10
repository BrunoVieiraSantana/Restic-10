import React, { useState, useEffect } from 'react';

const products = [
  { id: 1, name: 'Produto 1', description: 'Descrição do Produto 1', img: 'img/01.png', price: 10.99 },
  { id: 2, name: 'Produto 2', description: 'Descrição do Produto 2', img: 'img/01.png', price: 12.99 },
  { id: 3, name: 'Produto 3', description: 'Descrição do Produto 3', img: 'img/01.png', price: 15.99 },
  { id: 4, name: 'Produto 4', description: 'Descrição do Produto 4', img: 'img/01.png', price: 18.99 },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    updateCart();
    updateTotal();
  }, [cartItems]);

  const updateCart = () => {
    setTotalItems(cartItems.reduce((sum, item) => sum + item.quantity, 0));
  };

  const updateTotal = () => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);
    document.getElementById('total').textContent = `Total: $${totalPrice}`;
  };

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
        return [...prevCartItems];
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);

      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity -= 1;
        return [...prevCartItems];
      } else {
        return prevCartItems;
      }
    });
  };

  return (
    <div>
      <div className="container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img className="product-img" src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product)}>Adicionar</button>
            <button onClick={() => handleRemoveFromCart(product)}>Remover</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <button id="cart">Carrinho ({totalItems} itens)</button>
        <p id="total">Total: $0.00</p>
      </div>
    </div>
  );
};

export default App;
