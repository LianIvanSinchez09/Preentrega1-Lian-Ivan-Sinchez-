import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Loader from './Loader';

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

    const [loading, setLoading] = useState(true)
      
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
      }, 3000)
  }, [])

    return (
        <main className='content-wrap centerflex'>
            {loading ? 
            
              <Loader/>
              
              : 
              
              <ItemDetail producto={producto} /> 
            }
        </main>
    );
};

export default ItemDetailContainer;