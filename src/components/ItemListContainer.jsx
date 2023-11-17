import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import { Card, CardBody, CardImg, CardLink, CardTitle, ListGroup , ListGroupItem, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


const ItemListContainer = () => {
  
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [filtrarProductos, setFiltrarProductos] = useState([]);
  const [productos, setProductos] = useState([])
  
  //db de Firestore con los productos
  useEffect(() =>{
    const dbProd = getFirestore()
    const prodCollection = collection(dbProd, 'productos')
    getDocs(prodCollection)
    .then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProductos(docs)
      setFiltrarProductos(docs)
      setProductosOriginales(docs)
    })
    .catch((error) => {
      console.error("Error al cargar los productos:", error)
    })
  }, [])

  const filtrarPorPrecio = () => {
    // ordena los productos por precio en orden ascendente
    const productosOrdenados = [...filtrarProductos].sort((a, b) => a.precio - b.precio);
    setFiltrarProductos(productosOrdenados);
  };

  const filtrarPrecioMayor = () => {
    // ordena los productos por precio en orden descendente (de mayor a menor)
    const productosMayor = [...filtrarProductos].sort((a, b) => b.precio - a.precio);
    setFiltrarProductos(productosMayor);
  }

  const restaurar = () => {
    // restaura los productos originales
    setFiltrarProductos(productosOriginales);
  }

  return (
    <>
      <main>
        <section className="mb-3">
          <div className="cover-products">
            <div className="centerflex text-center">
              <h1>Nuestros Productos</h1>
            </div>
          </div>
        </section>
        <section className="product-showcase mb-5">
          <h2 className="display-5 text-center text-dark mb-5 opacity-0-100">Sin conservantes • Envíos gratis • Para compartir cuando quieras</h2>
          <div className='centerflex'>
            <Dropdown>
              <DropdownToggle>Filtrar</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={filtrarPrecioMayor}>Filtrar por precio más alto</DropdownItem>
                <DropdownItem onClick={filtrarPorPrecio}>Filtrar por precio más bajo</DropdownItem>
                <DropdownItem onClick={restaurar}>Restaurar lista</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div id="product" className='mt-5 sales-index'>
            {filtrarProductos.map((producto) => (
                <Card key={producto.nombre} className='product-card'>
                  <CardBody>
                    <CardImg variant="top" src={producto.imagen} alt={producto.alt} />
                    <h1 className='text-dark'>{producto.nombre}</h1>
                  </CardBody>
                  <ListGroup>
                    <ListGroupItem>$ {producto.precio}</ListGroupItem>
                  </ListGroup>
                  <CardBody>
                    <Link to={`/Productos/${producto.id}`} className='btn-2'>
                      Ver Detalles
                    </Link>
                  </CardBody>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ItemListContainer;