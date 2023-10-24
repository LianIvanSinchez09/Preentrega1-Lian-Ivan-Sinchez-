import React from 'react'
import ItemDetail from './ItemDetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
    const productos = [
        {
        "id": 1, 
        "name": "Mix Regional", 
        "description": "Pastafrola, medialunas y más (1 docena)", 
        "precio": 350, 
        "img": "imgs/products-pngs/product-1.png"
        },
        {
        "id": 2, 
        "name":"Cheesecake Festivo", 
        "description": "Cheesecake de frutilla y chocolate (1)", 
        "precio": 550, 
        "img": "imgs/products-pngs/product-2.png"
        },
        {
        "id": 3, 
        "name": "Cheesecake Tradicional", 
        "description": "Cheesecake con frutilla y pasta de maní (1)", 
        "precio": 150, 
        "img": "imgs/products-pngs/product-3.png"
        }
    ]
    const mostrarProductos = new Promise((resolve, reject) => {
        if(productos.length > 0){
            setTimeout(() => {
               resolve(productos) 
            }, 3000);
        }else{
            reject('No se encontraron productos')
        }
    })   
    mostrarProductos
        .then((resultado) => {
            console.log(resultado)
        })
        .catch((error) => {
            console.log(error)
        })
  return (
        <>
        return (
            <main className="content-wrap">
            <section className="mb-3">
            <div className="cover-products">
                <div className="centerflex text-center">
                <h1>Nuestros Productos</h1>
                </div>
            </div>
            </section>
            <section className="product-showcase mb-5">
                <h2 className="display-5 text-center text-dark mb-5 opacity-0-100">Sin conservantes • Envios gratis • Para compartir cuando quieras</h2>
                <div id="product" className='d-flex justify-content-center'>
                <Card>
                        <CardBody>
                            <CardTitle>Mix Regional</CardTitle>
                            <CardText>
                            "Pastafrola, medialunas y más (1 docena)"
                            </CardText>
                            <Button className='btn-2'>
                                <Link to='/pastafrola'>
                                    Ver Detalles
                                </Link>
                            </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>Cheesecake Festivo</CardTitle> {/* Utiliza el valor del producto para el nombre */}
                            <CardText>
                            Cheesecake de frutilla y chocolate (1) {/* Utiliza el valor del producto para la descripción */}
                            </CardText>
                            <Button className='btn-2'>
                                <Link to='/cheesecake_festivo'>
                                    Ver Detalles
                                </Link>
                            </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>Cheesecake Tradicional</CardTitle> {/* Utiliza el valor del producto para el nombre */}
                            <CardText>
                            Cheesecake con frutilla y pasta de maní (1) {/* Utiliza el valor del producto para la descripción */}
                            </CardText>
                            <Button className='btn-2'>
                                <Link to='/cheesecake_tradicional'>
                                    Ver Detalles
                                </Link>
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            </section>
            </main>
        )
    </>
  )
}
export default ItemListContainer