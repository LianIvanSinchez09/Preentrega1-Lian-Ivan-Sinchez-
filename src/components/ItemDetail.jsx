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
        <div className='margin-top'>
            <Card className='usercard'>
                <CardBody>
                    <CardTitle>{producto.name}</CardTitle>
                    <CardText>{producto.description}</CardText>
                    <div>
                        <Row>
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
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default ItemDetail;