import React from 'react'
import { useContext } from 'react'
import { CartContext } from './ShoppingCartContext'

const ComponenteA = () => {

    const {cart, setCart, comision} = useContext(CartContext)

  return (
    <div>
        variable comision {comision}
    </div>
  )
}

export default ComponenteA