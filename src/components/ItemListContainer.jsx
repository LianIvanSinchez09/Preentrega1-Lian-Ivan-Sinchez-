import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import { Card, CardBody, CardTitle, CardText, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [filtrarProductos, setFiltrarProductos] = useState([]);
  const [filtrarPorMayor, setFiltrarPorMayor] = useState([]);

  useEffect(() => {
    // realiza la carga de datos desde el archivo JSON usando fetch
    fetch('/src/json/productos.json')
      .then((res) => res.json())
      .then((json) => {
        // guarda los datos originales y los filtra por defecto al cargar
        setProductosOriginales(json);
        setFiltrarProductos(json);
      })
      .catch((error) => {
        console.error('Error al cargar datos:', error);
      });
  }, []);

  const filtrarPorPrecio = () => {
    // Ordena los productos por precio en orden ascendente
    const productosOrdenados = [...filtrarProductos].sort((a, b) => a.precio - b.precio);
    setFiltrarProductos(productosOrdenados);
  };

  const filtrarPrecioMayor = () => {
    // Ordena los productos por precio en orden descendente (de mayor a menor)
    const productosMayor = [...filtrarProductos].sort((a, b) => b.precio - a.precio);
    setFiltrarProductos(productosMayor);
  };

  const restaurar = () => {
    // restaura los productos originales
    setFiltrarProductos(productosOriginales);
  };

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
              <Dropdown.Toggle>Filtrar</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={filtrarPrecioMayor}>Filtrar por precio más alto</Dropdown.Item>
                <Dropdown.Item onClick={filtrarPorPrecio}>Filtrar por precio más bajo</Dropdown.Item>
                <Dropdown.Item onClick={restaurar}>Restaurar lista</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div id="product" className='d-flex justify-content-center mt-5'>
            {filtrarProductos.map((producto) => (
              <Card key={producto.id}>
                <CardBody>
                  <CardTitle>{producto.name}</CardTitle>
                  <CardText>$ {producto.precio}</CardText>
                  <Button className='btn-2'>
                    <Link to={producto.id}>
                      Ver Detalles
                    </Link>
                  </Button>
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
