import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      quantity: 1,
    },
    {
      id: 2,
      name: "Headphones",
      price: 2000,
      quantity: 1,
    },
    {
      id: 3,
      name: "Mouse",
      price: 800,
      quantity: 1,
    },
  ]);

  // Increase product quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease product quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate total amount dynamically
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.container}>
      <h1>Shopping Cart</h1>

      {cart.map((item) => (
        <div key={item.id} style={styles.product}>
          <h2>{item.name}</h2>

          <p>Price: ₹{item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <button
            onClick={() => decreaseQuantity(item.id)}
            style={styles.button}
            aria-label={`Decrease ${item.name} quantity`}
          >
            −
          </button>

          <button
            onClick={() => increaseQuantity(item.id)}
            style={styles.button}
            aria-label={`Increase ${item.name} quantity`}
          >
            +
          </button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  product: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "15px",
  },
  button: {
    padding: "8px 18px",
    margin: "5px",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default App;
