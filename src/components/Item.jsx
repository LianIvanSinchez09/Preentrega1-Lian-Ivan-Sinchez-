import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Card, CardText } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({name, img, id, precio}) => {
    // console.log(id)
    return (
        <Card>
            <CardImg variant="top" src={img} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>
                    {description}
                </CardText>
                <CardText>
                    {precio}
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Item