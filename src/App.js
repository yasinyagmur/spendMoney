import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import products from "./assets/products.json";

function App() {
  const [money, setMoney] = useState(100); // start money
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    console.log(basket);
  }, [basket]);

  return (
    <div className="App">
      <Header money={money} />
      {products.map((product) => (
        <Product
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          product={product}
        />
      ))}
    </div>
  );
}

export default App;
