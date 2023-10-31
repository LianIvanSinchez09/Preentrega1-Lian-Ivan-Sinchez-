import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown ,DropdownMenu, DropdownToggle} from 'react-bootstrap';
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ItemListContainer from './ItemListContainer';

const CartWidget = () => {
  return (
    <Dropdown>
      <DropdownToggle variant="dark" bg="dark" id="dropdown-basic">
        <FontAwesomeIcon className='h2' icon={faShoppingCart}/>
      </DropdownToggle>
      <DropdownMenu aria-labelledby="dropdownMenuButton1">
          <div className="d-flex flex-column gap-3 p-3">
            <div id="carrito" className="mt-2 mb-2">
              {/* Aquí se mostrarán los productos en el carrito */}
            </div>
          </div>
      </DropdownMenu>
    </Dropdown>
  )
}

export default CartWidget