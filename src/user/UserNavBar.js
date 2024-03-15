import React from 'react';
import './usernavbar.css'; // Import your local CSS file
import {Routes, Route, Link} from 'react-router-dom'
import DashBorad from './DashBorad';
import Profile from './Profile';
import Contact from './Contact';
import PlayLists from './PlayLists';


export default function UserNavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'><span><b>ZENE</b></span></Link></li>
          <li><Link to='/'>DashBoard</Link></li>
          <li><Link to='/playlists'>MyPlayLists</Link> </li>
          <li ><Link to='/contact'>Contact</Link></li>
          <li ><Link to = '/Profile'>Profile</Link></li>
          
        </ul>
      </nav>
      <Routes>
        <Route path='/' Component={DashBorad} exact/>
        <Route path='/profile' Component={Profile} exact/>
        <Route path='/contact' Component={Contact} exact/>
        <Route path='/playlist' Component={PlayLists} exact/>
      </Routes>
    </div>

  );
}

