import { useDeferredValue, useEffect, useState, useTransition } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Productpage from "./Components/Productpage";
import data from "./data";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartitems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x);
      setCartItems(newCartitems);
      localStorage.setItem("cartitems", JSON.stringify(newCartitems));

    }
    else {
      const newCartitems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartitems);
      localStorage.setItem("cartitems", JSON.stringify(newCartitems));
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  };
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setCartItems(
        localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : []
      );
    });
  }, []); 

  const cartCount = useDeferredValue(cartItems.length);

  
  return isPending ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Header countCartItems={cartCount} />
      <div className="row">
        <Productpage
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          products={products}
        />
        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default App;
