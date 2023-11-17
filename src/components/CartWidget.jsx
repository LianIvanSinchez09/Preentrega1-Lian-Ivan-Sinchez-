import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';

const CartWidget = ({ carrito, removeFromCarrito, addToCarrito }) => {
  return (
    <Dropdown>
      <DropdownToggle variant="dark" bg="dark" id="dropdown-basic">
        <FontAwesomeIcon className='h2' icon={faShoppingCart} />
      </DropdownToggle>
      <DropdownMenu aria-labelledby="dropdownMenuButton1">
        <div className="d-flex flex-column">
          <div id="carrito" className="mt-2 mb-2">
          <div>
            {carrito && carrito.map((item) => (
              <li key={item.id}>
                {item.nombre} - ${item.precio}
                <button className='btn-2' onClick={() => removeFromCarrito(item.id)}>Eliminar</button>
              </li>
            ))}
          </div>
          </div>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
}

export default CartWidget;
