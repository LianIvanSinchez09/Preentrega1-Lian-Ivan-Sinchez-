import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({ producto }) => {
    const { id } = useParams();
    const [cantidad, setCantidad] = useState(0);

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    const sumar = () => {
        setCantidad(cantidad + 1);
    };

    const restar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <main className='margin-top centerflex'>
            <Card className='usercard'>
                <CardBody>
                    <CardImg src={producto.imagen}></CardImg>
                    <CardTitle>{producto.nombre}</CardTitle>
                    <CardText>{producto.desc}</CardText>
                    <CardText>$ {producto.precio}</CardText>
                    <div>
                        <Row>
                            <div className='centerflex'>
                                <Col>
                                    <Button className='btn-2' onClick={restar}>
                                        -
                                    </Button>
                                </Col>
                                <Col>
                                    <span>Cantidad: {cantidad}</span>
                                </Col>
                                <Col>
                                    <Button className='btn-2' onClick={sumar}>
                                        +
                                    </Button>
                                </Col>
                                <div>
                                    <Button className='btn-2'>
                                        Comprar
                                    </Button>
                                </div>

                            </div>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </main>
    );
}

export default ItemDetail;