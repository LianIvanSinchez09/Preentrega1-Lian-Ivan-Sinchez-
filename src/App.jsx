import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import { NavigationBar } from './components/Navbar'
import CartWidget from './components/CartWidget'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import Footer from './components/Footer'
import Productos from './pages/Productos'
import Empleados from './pages/Empleados'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail'

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar/>
        <Routes>
          {/* <Route exact path="/ItemListContainer" element={<ItemListContainer/>}/> */}
          <Route exact path='/Home' element={<Home/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/productos' element={<Productos/>}/>
          <Route exact path='/productos/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/empleados' element={<Empleados/>}/>
        </Routes>
      
    </BrowserRouter>
  )
}
export default App