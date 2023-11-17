import React from 'react'
import AddAction from './AddAction'


const Cart = () => {
  return (
    <div>
        <AddAction carrito={carrito} removeFromCarrito={removeFromCarrito} />
    </div>
  )
}

export default Cart