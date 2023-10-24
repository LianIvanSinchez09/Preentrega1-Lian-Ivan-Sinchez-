import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);
  
  const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 15 },
    { id: 3, name: 'Producto 3', price: 20 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="cart mt-5">
      <h1>Carrito de Compras</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button className='btn-2' onClick={() => addToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
      <h2>Elementos en el Carrito</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button className='btn-2' onClick={() => removeFromCart(item.id)}>Eliminar del carrito</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default Cart;