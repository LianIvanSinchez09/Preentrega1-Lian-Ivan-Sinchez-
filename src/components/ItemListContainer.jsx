import React from 'react'
import ItemDetail from './ItemDetail'

const ItemListContainer = () => {
    const productos = [
        {
        "id": 1, 
        "name": "Mix Regional", 
        "description": "Pastafrola, medialunas y más (1 docena)", 
        "precio": 350, 
        "img": "imgs/products-pngs/product-1.png"
        },
        {
        "id": 2, 
        "name":"Cheesecake Festivo", 
        "description": "Cheesecake de frutilla y chocolate (1)", 
        "precio": 550, 
        "img": "imgs/products-pngs/product-2.png"
        },
        {
        "id": 3, 
        "name": "Cheesecake Tradicional", 
        "description": "Cheesecake con frutilla y pasta de maní (1)", 
        "precio": 150, 
        "img": "imgs/products-pngs/product-3.png"
        }
    ]
    const mostrarProductos = new Promise((resolve, reject) => {
        if(productos.length > 0){
            setTimeout(() => {
               resolve(productos) 
            }, 3000);
        }else{
            reject('No se encontraron productos')
        }
    })   
    mostrarProductos
        .then((resultado) => {
            console.log(resultado)
        })
        .catch((error) => {
            console.log(error)
        })
  return (
    <>
        <ItemDetail
        productos={productos}
        />
    </>
  )
}

export default ItemListContainer