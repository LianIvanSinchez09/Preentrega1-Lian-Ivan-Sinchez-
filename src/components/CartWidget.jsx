import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown ,DropdownMenu, DropdownToggle} from 'react-bootstrap';
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ItemListContainer from './ItemListContainer';

const CartWidget = () => {
  return (
    <Dropdown className='x-transitionNegative'>
      <DropdownToggle variant="dark" bg="dark" id="dropdown-basic">
        {/* <i className="link-nav display-6 fas fa-shopping-cart" icon="shopping-cart" style={{color: '#ffffff'}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i> */}
        <FontAwesomeIcon className='h2' icon={faShoppingCart}/>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu stay-open" aria-labelledby="dropdownMenuButton1">
          <div className="d-flex flex-column gap-3 p-3">
            <h5 id="total" className="position-fixed text-dark mb-2">Total: 1</h5>
            <div id="carrito" className="mt-2 mb-2">
              <ItemListContainer />
              {/* Aquí se mostrarán los productos en el carrito */}
            </div>
          </div>
      </DropdownMenu>
    </Dropdown>
  )
}

export default CartWidget