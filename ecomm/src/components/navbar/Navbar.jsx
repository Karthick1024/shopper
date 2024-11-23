/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Shopcontext } from '../../context/Shopcontext';

export const Navbar = () => {
  const{getTotalCartItems} = useContext(Shopcontext)
  return (
    <div className='navbar '>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p >Shopper</p>
        </div>
        <ul className="nav-menu mt-3">
            <li><Link to='/'>Shop</Link></li>
            <li><Link to='/mens'>Mens</Link></li>
            <li><Link to='/womens'>Women</Link></li>
            <li><Link to='/kids'>Kids</Link></li>
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem('auth-token')? <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
          <Link to='/login'> <button>Login</button></Link> }
          <Link to='/cart'> <img  src={cart_icon} alt="" /></Link> 
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

    </div>
  )
}
