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
import ShoppingCartContext from './components/ShoppingCartContext'
import ComponenteA from './components/ComponenteA'
import ComponenteB from './components/ComponenteB'
import './js/body'
import Testing from './pages/Testing'


const App = () => {
//   const [loading, setLoading] = useState(false)

//   const changeState = () => {
//     setLoading(true)
//     setTimeout(()=>{
//       setLoading(false)
//     }, 5000);
//   }

//   if(loading){
//     return(
//       <Loading/>
//     )
//   }
//   else{
//     return(
//       <div>
//         //pagina
//       </div>
//     )
//   }

  return (
    <>
      <BrowserRouter>
        <NavigationBar/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route exact path='/Home' element={<Home/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            <Route exact path='/:id' element={<ItemDetailContainer/>}/>
            <Route exact path='/empleados' element={<Empleados/>}/>
            <Route exact path='/Testing' element={<Testing/>}/>
          </Routes>
        </BrowserRouter>
        {/* <ShoppingCartContext>
          <ComponenteA/>
          <ComponenteB/>
        </ShoppingCartContext> */}
      <Footer/>
    </>
  )
}
export default App