import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Loader from './Loader';
import AddAction from './AddAction';

const ItemDetailContainer = () => {
    const { id } = useParams(); // obtiene la ID de los parametros de la URL
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() =>{
        const dbProd = getFirestore()
        const prodCollection = collection(dbProd, 'productos')
        getDocs(prodCollection)
        .then((snapshot) => {
          const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setProductos(docs)
        })
        .catch((error) => {
          console.error("Error al cargar los productos:", error)
        })
      }, [])

      const addToCarrito = (item) => {
        setCarrito([...carrito, item]);
      };
      
      const removeFromCarrito = (itemId) => {
        const updatedCarrito = carrito.filter((item) => item.id !== itemId);
        setCarrito(updatedCarrito);
      };


    // sirve para encontrar el producto segun el ID
    const producto = productos.find((p) => p.id === id);
      
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
              <>
              <ItemDetail producto={producto} addToCarrito={addToCarrito} /> 
              </>
            }
        </main>
    );
};

export default ItemDetailContainer;