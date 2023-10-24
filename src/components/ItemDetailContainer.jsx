import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams(); // Obtén el ID de los parámetros de la URL

    const productos = [
        {
            "id": "pastafrola",
            "name": "Mix Regional",
            "description": "Pastafrola, medialunas y más (1 docena)",
            "precio": 350,
            "img": "imgs/products-pngs/product-1.png"
        },
        {
            "id": "cheesecake_festivo",
            "name": "Cheesecake Festivo",
            "description": "Cheesecake de frutilla y chocolate (1)",
            "precio": 550,
            "img": "imgs/products-pngs/product-2.png"
        },
        {
            "id": "cheesecake_tradicional",
            "name": "Cheesecake Tradicional",
            "description": "Cheesecake con frutilla y pasta de maní (1)",
            "precio": 150,
            "img": "imgs/products-pngs/product-3.png"
        }
    ]

    const producto = productos.find((p) => p.id == id);

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    );
};

export default ItemDetailContainer;