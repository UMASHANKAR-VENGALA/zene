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
import UserSidebar from './user/UserSidebar'
import AdminDashBoard from './admin/AdminDashboard'
import AdminTrending from './admin/AdminTrending'
import AdminPlayer from './admin/AdminPlayer'
import AdminFavourites from './admin/AdminFavourites'
import AdminLibrary from './admin/AdminLibrary'
import AdminSidebar from './admin/AdminSidebar'
import ViewUsers from './admin/ViewUsers'
import PageNotFound from './welcome/PageNotFound.'

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

                <Route path='/UserSidebar' element={<UserSidebar/>}/>
                <Route path='/AdminSidebar' element={<AdminSidebar/>}/>
                <Route path="/admindashboard" element={<AdminDashBoard/>} />
                <Route path="/admintrending" element={<AdminTrending/>} />
                <Route path="/adminplayer" element={<AdminPlayer/>} />
                <Route path="/adminfavourites" element={<AdminFavourites/>} />
                <Route path="/adminlibrary" element={<AdminLibrary/>} />

                <Route path='/viewusers' element={<ViewUsers/>}/>
                <Route path="/logout" element={<Home/>} />

                <Route path="*" element={<PageNotFound/>} />
                

            </Routes>


    </div>
  )
}
