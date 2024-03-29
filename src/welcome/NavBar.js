/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import {  Link } from 'react-router-dom';
import logo from "./LOGO.png"

import './SignIn.css'


export default function NavBar() {
  return (
    <div>
         
                <nav className="navbar">
                     <Link to='/'>
                      <div className="navbar__logo">
                      <img src={logo} alt="Logo" />
                      </div>
                     </Link>
                  <div className="navbar__links">
                     <Link to='/signin'>
                     <button class="button-64" role="button"><span class="text">Sign In</span></button>
                     </Link>
                     <Link to='/register'>
                     <button class="button-64" role="button"><span class="text">Register</span></button>
                     </Link>
                     <Link to='/Adminlogin'>
                     <button class="button-64" role="button"><span class="text">Admin SignIn</span></button>
                     </Link>
                  </div>
                  
                </nav>
        
    </div>
  )
}
