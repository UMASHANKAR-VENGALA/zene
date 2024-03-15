import React from 'react'
import {  Link, Route, Routes } from 'react-router-dom';
import logo from "./LOGO.png"
import Register from './Register';
import SignIn from './SignIn';
import Button from '@mui/material/Button';
import Home from './Home';
import DashBoard from '../user/Dashboard';
import AdminLogin from './../admin/AdminLogin';


export default function NavBar() {
  return (
    <div>
         
                <nav className="navbar">
                     <Link to=''>
                      <div className="navbar__logo">
                      <img src={logo} alt="Logo" />
                      </div>
                     </Link>
                  <div className="navbar__links">
                     <Link to='/signin'>
                     <Button>UserSignin</Button>
                     </Link>
                     <Link to='/register'>
                     <Button>UserRegister</Button>
                     </Link>
                     <Link to='/Adminlogin'>
                      <Button>AdminSignin</Button>
                     </Link>
                  </div>
                  
                </nav>
        
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/signin' element={<SignIn/>} />
                <Route path='/register' element={<Register/>}/>
                <Route path='/dashboard' element={<DashBoard/>}/>
                <Route path='/adminlogin' element={<AdminLogin/>}/>
            </Routes>
        
        
    </div>
  )
}
