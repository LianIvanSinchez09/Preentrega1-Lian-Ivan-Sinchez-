import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Loader from './Loader';
import Cart from './Cart';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const dbProd = getFirestore();
    const prodCollection = collection(dbProd, 'productos');
    getDocs(prodCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        setProductos(docs);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const storedCarrito = localStorage.getItem('carrito');
    if (storedCarrito) {
      setCarrito(JSON.parse(storedCarrito));
    }
  }, []);

  const addToCarrito = (item) => {
    const updatedCarrito = [...carrito, item];
    setCarrito(updatedCarrito);
    localStorage.setItem('carrito', JSON.stringify(updatedCarrito));
    setCartItemCount(updatedCarrito.length);
  };
  
  const removeFromCarrito = (itemId) => {
    const updatedCarrito = carrito.filter((item) => item.id !== itemId);
    setCarrito(updatedCarrito);
    localStorage.setItem('carrito', JSON.stringify(updatedCarrito));
    setCartItemCount(updatedCarrito.length);
  };

  const producto = productos.find((p) => p.id === id);

  return (
    <main className='content-wrap centerflex'>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ItemDetail producto={producto} addToCarrito={addToCarrito} />
          <Cart carrito={carrito} removeFromCarrito={removeFromCarrito} />
        </div>
      )}
    </main>
  );
};

export default ItemDetailContainer;
