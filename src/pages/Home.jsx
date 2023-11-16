import React from 'react'
import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Card, CardBody, CardImg, CardLink, CardTitle, ListGroup , ListGroupItem, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'

const Home = () => {

  const [productosHome, setProductosHome] = useState([])

  useEffect(() =>{
    //getFirestore: input de los datos de la database formada en firestore por el dev
    const dataBase = getFirestore()
    //especifico cual coleccion de la database queremos, en este caso los perfiles
    const prodDb = collection(dataBase, 'productos')
    //getDocs trae la informacion de la variable con la collection a eleccion
    getDocs(prodDb).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProductosHome(docs)
    })
  }, [])

  let i = 0

  return(
    <main>
      <section className="bg-intro">
          <div className="bg-intro-content container">
            <h1>Los Cuatro Alamos</h1>
            <p>Panadería familiar</p>
          </div>
      </section>
      <section className="title-cover">
        <div className="div-line">
          <h2 className="display-4 text-dark text-center mt-5">Ofertas nuevas cada semana</h2>
        </div>
      </section>
      <section className="container-fluid">
        <div className="container-fluid sales-index">
          {productosHome.slice(0, 3).map((p, index) => (
            <Card key={p.nombre + index} className="product-card">
              <CardBody>
                <CardImg variant="top" src={p.imagen} alt={p.alt} />
                <h1 className="text-dark">{p.nombre}</h1>
              </CardBody>
              <ListGroup>
                <ListGroupItem>$ {p.precio}</ListGroupItem>
              </ListGroup>
              <CardBody>
                <CardLink href={p.id} className="btn-2">
                  Ver Detalles
                </CardLink>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
      <section className="title-cover">
        <div className="div-line">
          <h2 className="display-4 text-dark text-center mt-5">Nuestras tradiciones</h2>
        </div>
      </section>
      <section className="container-fluid">
        <div className="traditions-ad">
          <div className="tradition-card text-center">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="card-icons">
              <i className="fa-sharp fa-solid fa-truck fa-xl fs-2"></i>
              </div>
              <h5 className="text-dark display-6">Envios gratis a todo el país</h5>
              <p>Gracias nuestras sucursales en todas las provincias</p>
            </div>
          </div>
          <div className="tradition-card text-center">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="card-icons">
                <i className="fa-sharp fa-solid fa-kitchen-set fa-xl fs-2"></i>
              </div>
              <h5 className="text-dark display-6">Productos hechos con pasión por la cocina</h5>
              <p>Y para disfrutar cada momento</p>
            </div>
          </div>
          <div className="tradition-card text-center">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="card-icons">
                <i className="fa-sharp fa-solid fa-fire-burner fa-lg fs-2"></i>
              </div>
              <h5 className="text-dark display-6">Deliciosas recetas</h5>
              <p>Compartidas en nuestro <a className="text-dark" href="pages/newsletter.html">Newsletter</a></p>
            </div>
          </div>
          </div>
      </section>
      <section className="title-cover">
        <div className="div-line">
          <h2 className="display-4 text-dark text-center mt-5"></h2>
        </div>
      </section>
      <section className="centerflex mb-5">
        <div className="box-contact-index">
          <h5 className="text-white text-center fs-1">¿Tenés alguna pregunta?</h5>
          <div className="centerflex">
            <button className="btn-2 p-2" type="button"><a href="pages/contacto.html">Contactanos hoy</a></button>
          </div>
        </div>
      </section>
</main>
  )

}
export default Home