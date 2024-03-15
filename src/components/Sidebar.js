import { MdDashboard, MdLibraryMusic } from 'react-icons/md'
import { BsFire, BsFillMusicPlayerFill } from "react-icons/bs";
import { TbMusicHeart } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


export default function Sidebar({children}) {

    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const menuItem = [
        {
            path:"/",
            name:"Dashboard",
            icon:<MdDashboard />
        },
        {
            path:"/trending",
            name:"Trending",
            icon:<BsFire />
        },
        {
            path:"/player",
            name:"Player",
            icon:<BsFillMusicPlayerFill />
        },
        {
            path:"/favourites",
            name:"Favourites",
            icon:<TbMusicHeart />
        },
        {
            path:"/library",
            name:"Library",
            icon:<MdLibraryMusic />
        },
    ]

  return (
    <div className="container" >
        <div style={{width: isOpen ? "280px" : "85px"}} className="sidebar">
            <div className="top_section">
                <NavLink to="/" style={{display: isOpen ? "block" : "none"}} className='logo'>
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
    </div>
  )
}
