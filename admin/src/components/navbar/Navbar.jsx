/* eslint-disable no-unused-vars */
import React from 'react'
import './navbar.css'
import navlogo from '../../Admin_Assets/nav-logo.svg'
import navprofile from '../../Admin_Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} className='nav-logo' alt="" />
        <img src={navprofile} className='nav-profil' alt="" />
    </div>
  )
}

export default Navbar