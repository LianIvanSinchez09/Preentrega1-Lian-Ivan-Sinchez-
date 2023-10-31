import React, { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext(null)

export const ShoppingCartContext = ({children}) => {
 //Espacio para crear variables, estados, funciones, etc

    const [cart, setCart] = useState([])

    const comision = 60815

  return (
    <CartContext.Provider value={{ cart, setCart, comision }}>
        {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartContext