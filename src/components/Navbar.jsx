import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import Styles from '../css/styles.css';
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Accordion, Card, NavbarToggle, NavbarCollapse, NavbarBrand} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Empleados from '../pages/Empleados';
import Home from '../pages/Home';

export const NavigationBar = () => {
  return (
    <header>
        <Navbar bg="light" expand="lg">
            <Link className='custom-links navbrand' to='/Home'>Los Cuatro Alamos</Link>
            <NavbarToggle aria-controls="basic-navbar-nav" />
            <NavbarCollapse id="basic-navbar-nav">
                <ul className='navbar-nav navbar-links'>
                    <Nav className="mr-auto">
                        <Link to='/' className='mx-2 custom-links nav-item link-nav display-6'>Productos</Link>
                        <Link to='/empleados' className='mx-2 custom-links nav-item link-nav display-6'>Empleados</Link>
                        <Link to='/cart'>
                            <CartWidget/>
                        </Link>
                        
                    </Nav>
                </ul>
            </NavbarCollapse>
        </Navbar>
 </header>
  )
}

export default Navbar