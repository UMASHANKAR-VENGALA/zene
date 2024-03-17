import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './welcome/Home'
import SignIn from './welcome/SignIn'
import Register from './welcome/Register'
import DashBoard from './user/Dashboard'
import AdminLogin from './admin/AdminLogin'
import Trending from './user/Trending'
import Player from './user/Player'
import Favourites from './user/Favourites'
import Library from './user/Library'

export default function ZeneRoutes() {
  return (
    <div>


            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/signin' element={<SignIn/>} />
                <Route path='/register' element={<Register/>}/>
                <Route path='/dashboard' element={<DashBoard/>}/>
                <Route path='/adminlogin' element={<AdminLogin/>}/>

                <Route path="/dashboard" element={<DashBoard/>} />
                <Route path="/trending" element={<Trending/>} />
                <Route path="/player" element={<Player/>} />
                <Route path="/favourites" element={<Favourites/>} />
                <Route path="/library" element={<Library/>} />

            </Routes>


    </div>
  )
}
