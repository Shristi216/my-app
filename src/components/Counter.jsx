import React, { useState } from "react";
import Shopingcart from "./Shopingcart.jsx";

function Counter() {
  const [cart, setCart] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
  ]);

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };
  return (
    <div>
      {cart.map((item) => (
        <Shopingcart key={item.id} id={item.id} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Counter;
