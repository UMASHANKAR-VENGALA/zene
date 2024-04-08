import { MdDashboard, MdLibraryMusic } from 'react-icons/md'
import { BsFire, BsFillMusicPlayerFill } from "react-icons/bs";
import { TbMusicHeart, TbLogout2 } from "react-icons/tb";
import { FaBars,FaUserAlt } from "react-icons/fa";
import { Routes, Route, NavLink } from 'react-router-dom';
import {  useState } from 'react';


export default function Sidebar({children}) {

    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const menuItem = [
        {
            path:"/admindashboard",
            name:"Dashboard",
            icon:<MdDashboard />
        },
        {
            path:"/admintrending",
            name:"Trending",
            icon:<BsFire />
        },
        {
            path:"/adminplayer",
            name:"Player",
            icon:<BsFillMusicPlayerFill />
        },
        {
            path:"/adminfavourites",
            name:"Favourites",
            icon:<TbMusicHeart />
        },
        {
            path:"/adminlibrary",
            name:"Library",
            icon:<MdLibraryMusic />
        },
        {
            path:"/viewusers",
            name:"View Users",
            icon:<FaUserAlt />
        },
        {
            path:"/logout",
            name:"Logout",
            icon:<TbLogout2/>
        }
    ]

  return (
    <div className="container" >
        <div style={{width: isOpen ? "280px" : "85px"}} className="sidebar">
            <div className="top_section">
                <NavLink to="/dashboard" style={{display: isOpen ? "block" : "none"}} className='logo'>
                    <img src='LOGO.png' alt='logo' className='logoimg' />
                    {/* ZENE */}
                </NavLink>
                <div style={{marginLeft: isOpen ? "50px" : "15px"}} className='bars'>
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map( (item,index)=> (
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>

        {/* <Routes>
                <Route path='/UserSidebar' element={<UserSidebar/>}/>
                <Route path='/AdminSidebar' element={<AdminSidebar/>}/>
                <Route path="/admindashboard" element={<AdminDashBoard/>} />
                <Route path="/admintrending" element={<AdminTrending/>} />
                <Route path="/adminplayer" element={<AdminPlayer/>} />
                <Route path="/adminfavourites" element={<AdminFavourites/>} />
                <Route path="/adminlibrary" element={<AdminLibrary/>} />

                <Route path='/viewusers' element={<ViewUsers/>}/>
                <Route path="/logout" element={<Home/>} />
        </Routes> */}


    </div>
  )


}


