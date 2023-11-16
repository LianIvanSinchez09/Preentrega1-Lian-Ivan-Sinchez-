import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const { id } = useParams(); // obtiene la ID de los parametros de la URL
    const [productos, setProductos] = useState([])

    useEffect(() =>{
        const dbProd = getFirestore()
        const prodCollection = collection(dbProd, 'productos')
        getDocs(prodCollection)
        .then((snapshot) => {
          const docs = snapshot.docs.map((doc) => doc.data())
          setProductos(docs)
        })
        .catch((error) => {
          console.error("Error al cargar los productos:", error)
        })
      }, [])

    // sirve para encontrar el producto segun el ID
    const producto = productos.find((p) => 
          p.id == id
    );


    return (
        <main className='content-wrap centerflex'>
            <ItemDetail producto={producto} />
        </main>
    );
};

export default ItemDetailContainer;