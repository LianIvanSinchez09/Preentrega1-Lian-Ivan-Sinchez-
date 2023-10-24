import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <div>
        {
            productos.map((p) => {
                return(
                    <Item
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        description={p.description}
                        precio={p.precio}
                        img={p.img}
                    />
                )
            }
            )
        }
    </div>
  )
}
// {id: 1, name: "Mix Regional", description: "Sabores de la patagonia", alt: "mix-regional", precio: 350, img: "../imgs/products-pngs/product-1.png"},
// {id: 2, name: "Cheesecake Festivo", description: "Ideal para reuniones empresariales", alt: "cheesecake-festivo", precio:550, img: "../imgs/products-pngs/product-2.png"}
export default ItemList