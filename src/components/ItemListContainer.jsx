import React from 'react';
import Item from './item';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = () => {
  return(
    <div>
      <Item nombre="Docena de facturas" precio="500.00"/>
    </div>
  )
}

export default ItemListContainer;
