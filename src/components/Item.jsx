import React from 'react'


const Item = (props) => {
  return (
    <div className='mt-3'>
        <h2>Nombre: {props.nombre}</h2>
        <h3>Precio: {props.precio}</h3>
    </div>
  );
}

export default Item