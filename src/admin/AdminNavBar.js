import React from 'react'
import './adminnavbar.css'
import {  Link, Route, Routes } from 'react-router-dom';
import ViewUsers from './ViewUsers';
import AdminHome from './AdminHome';

export default function AdminNavBar() {
  return (
    <div>
        
        <nav>
          <ul>
            <li><Link to='/'>AdminHome</Link></li>
            <li><Link to='viewusers'>ViewUsers</Link></li>
          </ul>
        </nav>
                
            <Routes>
                <Route path='/' Component={AdminHome}/>
                <Route path='/viewusers' Component={ViewUsers}/>
            </Routes>
        
    </div>
  )
}
