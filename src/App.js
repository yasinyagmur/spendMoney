import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import products from "./assets/products.json";

function App() {
  const [money, setMoney] = useState(100); // start money
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  const resetBasket = () => {
    setBasket([]);
  };
  return (
    <div className="App">
      <Header total={total} money={money} />
      {products.map((product) => (
        <Product
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          product={product}
          total={total}
          money={money}
        />
      ))}
      <button onClick={resetBasket}>Sepeti Sıfırla</button>
    </div>
  );
}

export default App;
