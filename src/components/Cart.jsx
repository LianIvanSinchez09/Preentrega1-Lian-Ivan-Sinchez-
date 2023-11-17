import React from 'react';

export const Cart = ({ carrito, removeFromCarrito }) => {
  return (
    <main className='content-wrap margin-top'>
      <h2 className='text-dark'>Carrito de Compras</h2>
      <div>
        {carrito && carrito.map((item) => (
          <li key={item.id}>
            {item.nombre} - ${item.precio}
            <button className='btn-2' onClick={() => removeFromCarrito(item.id)}>Eliminar</button>
          </li>
        ))}
      </div>
    </main>
  );
};

export default Cart;
