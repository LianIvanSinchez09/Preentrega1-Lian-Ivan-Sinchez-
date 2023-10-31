import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import { Card, CardImg, CardBody, CardTitle, CardText, Button} from 'react-bootstrap'; // Importa los componentes de react-bootstrap
import { Link } from 'react-router-dom';

export const Productos = () => {
  return (
    <main>
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
                    <Button variant="primary">
                      <Link to=''>
                         Ver Detalles
                      </Link>
                            
                    </Button>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle>Cheesecake Festivo</CardTitle> 
                    <CardText>
                      Cheesecake de frutilla y chocolate (1)
                    </CardText>
                    <Button variant="primary">
                      Ver Detalles
                    </Button>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle>Cheesecake Tradicional</CardTitle> 
                    <CardText>
                      Cheesecake con frutilla y pasta de maní (1)
                    </CardText>
                    <Button variant="primary">
                      <Link>
                        Ver Detalles
                      </Link>
                    </Button>
                </CardBody>
            </Card>
          </div>
      </section>
  </main>
  )
}

export default Productos
