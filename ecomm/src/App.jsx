/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Shop} from './pages/Shop'
import { Cart } from './pages/Cart';
import { Category } from './pages/Category';
import { Product } from './pages/Product';
import Footer from './components/footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
import {Login} from './pages/Login';

function App() {
 

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<Category banner = {men_banner} category = "men"/>}/>
      <Route path='/womens' element={<Category banner = {women_banner} category = "women"/>}/>
      <Route path='/kids' element={<Category banner = {kid_banner} category = "kid"/>}/>
      <Route path='/product/' element={<Product/>}>
       <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>

    </>
  )
}

export default App
