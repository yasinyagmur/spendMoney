import React from "react";
import BasketItem from "../BasketItem/BasketItem";

const Basket = ({ basket, products, total, resetBasket }) => {
  return (
    <>
      {basket.map((item) => (
        <BasketItem
          item={item}
          product={products.find((p) => p.id === item.id)}
        />
      ))}
      <div>Toplam:${total}</div>
      <button onClick={resetBasket}>Sepeti Sıfırla</button>
    </>
  );
};

export default Basket;
