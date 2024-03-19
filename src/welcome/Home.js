import React from 'react';
import "./home.css";
import NavBar from './NavBar';


function Home() {
    
  return (
    <div className="Home">
         
        <NavBar/>

      <div className="body">
        <h1>Welcome to Our Music Streaming Platform!</h1>
        <br/>
        <h2>Let the rhythm guide your soul..</h2>
        
       

      </div>
    </div>
  );
}

export default Home;


