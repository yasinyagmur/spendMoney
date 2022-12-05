import React from "react";
import "./product.css";

const Product = ({ product, basket, setBasket }) => {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkbasket = basket.find((item) => item.id === product.id);
    // Ürün daha önce eklenmiş
    if (checkbasket) {
      checkbasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkbasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  return (
    <div className="product">
      <h6>{product.title}</h6>
      <div className="price">${product.price}</div>
      <div className="actions">
        <button>Sat</button>
        <span className="amount">{(basketItem && basketItem.amount) || 0}</span>
        <button onClick={addBasket}>Al</button>
      </div>
    </div>
  );
};

export default Product;
