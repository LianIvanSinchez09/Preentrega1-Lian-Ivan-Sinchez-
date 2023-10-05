import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = () => {
  return (
    <div>
      <Item nombre="Docena de facturas" precio="500.00" />
    </div>
  );
};

const Item = (props) => {
  return (
    <div className='my-4'>
      <h2>Nombre: {props.nombre}</h2>
      <h2>Precio: {props.precio}</h2>
    </div>
  );
};

export default ItemListContainer;
