"use client";


import { useState, useContext } from "react";
import { CartContext } from "./cartProvider";

export default function AddToCart({ name, price, thumbnail }) {
  const contextValue = useContext(CartContext);
  const [count, setCount] = useState(0);

  const onDecrease = () => {
    count && setCount(count - 1);
  };

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onAddToCart = () => {
    if (count) {
      contextValue.setCartItems((prev) => [
        ...prev,
        {
          name: name,
          price: price,
          qty: count,
          subTotal: price * count,
          thumbnail: thumbnail,
        },
      ]);
    } else {
      alert("Por favor, adicione ao menos 1 item");
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center mt-8">
      <div className="flex items-center gap-4 font-semibold">
        <button className="bg-neutral-200 rounded-lg p-2">
          <img
            src="images/icon-minus.svg"
            alt="Icon decrease"
            aria-label="Decrease item"
          ></img>
        </button>
        <span className="text-neutral-700">
          {count}
        </span>
        <button className="bg-neutral-200 rounded-lg p-2" onClick={onIncrease}>
          <img
            src="images/icon-plus.svg"
            alt="Icon increase"
            aria-label="Increase item"
          ></img>
        </button>
      </div>
      <button
        className="flex items-center font-semibold bg-blue-900 rounded-lg p-4 hover:bg-blue-900/65 transition-colors text-white"
        onClick={onAddToCart}
      >

        Comprar
      </button>
    </div>
  );
}
