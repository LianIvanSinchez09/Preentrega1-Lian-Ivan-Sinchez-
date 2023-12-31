import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ItemListContainer from './ItemListContainer';
import Cart from './Cart';


const ItemDetail = ({ producto, addToCarrito }) => {
    const { id } = useParams();
    const handleAddToCarrito = () => {
        addToCarrito(producto);
      };

    return (
        <main className='content-wrap margin-top centerflex'>
            <section className='product-grid'>
                <div className='product-details'>
                    <Link to="/Productos" className='mx-5'>
                        <button className='btn-goback'>Ir atras</button>
                    </Link>
                    <Card className='product-card-in-grid'>
                        <CardBody>
                            <CardImg src={producto.imagen}></CardImg>
                        </CardBody>
                    </Card>
                </div>
                <section className='margin-top'>
                    <div className='desc-product'>
                        <h1 className='text-dark'>{producto.nombre}</h1>
                        <h3 className='text-dark'>{producto.desc}</h3>
                        <p className='text-dark'>$ {producto.precio}</p>
                    </div>
                    <Row>
                        <Col>
                            <Button onClick={handleAddToCarrito} className='btn-2'>
                                Añadir al carrito
                            </Button>
                        </Col>
                    </Row>
                </section>

            </section>
            
        </main>
    );
}

export default ItemDetail;