import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import { NavigationBar } from './components/Navbar'
import CartWidget from './components/CartWidget'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Empleados from './pages/Empleados'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import AddAction from './components/Cart'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path='/Productos' element={<ItemListContainer/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            <Route exact path='/Productos/:id' element={<ItemDetailContainer/>}/>
            <Route exact path='/empleados' element={<Empleados/>}/>
            <Route exact path='/CartPage' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </>
  )
}
export default App