import React from 'react'
import styles from '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

export const Navbar = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-main">
                {/* brand */}
                <a className="display-4 text-link" href="#">Los Cuatro Alamos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars fa-2x1 fa" style={{color: '#ffffff'}}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav navbar-links">
                        <li><a className="text-link nav-item link-nav display-6" href="pages/.html">Productos</a></li>
                        <li><a className="text-link nav-item link-nav display-6" href="pages/empleados.html">Empleados</a></li>
                        <li><a className="text-link nav-item link-nav display-6" href="pages/newsletter.html">Newsletter</a></li>
                        <li><a className="text-link nav-item link-nav display-6" href="pages/contacto.html">Contactos</a></li>
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
 </header>
  )
}

export default Navbar