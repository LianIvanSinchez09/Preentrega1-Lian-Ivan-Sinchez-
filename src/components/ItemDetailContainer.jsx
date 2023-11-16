import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const { id } = useParams(); // obtiene la ID de los parametros de la URL
    
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

      const [productos, setProductos] = useState([])
      
    // sirve para encontrar el producto segun el ID
    const producto = productos.find((p) => 
          p.id === id
    );


    return (
        <main className='content-wrap centerflex'>
            {producto ? 
            
              <ItemDetail producto={producto} /> 
              
              : 
              
              <main className='centerflex'>
                <h1 className='text-dark'>Producto no encontrado</h1>
              </main>
            }
        </main>
    );
};

export default ItemDetailContainer;