import React from 'react';
import "./home.css";
import NavBar from './NavBar';


function Home() {
    
  return (
    <div className="Home">
         
        <NavBar/>

      <div className="body">
        <h1>Welcome to Our Music Streaming Platform!</h1>
        <br/><br/>
        <h3>Listen to your favorite music anytime, anywhere.</h3>
        
       

      </div>
    </div>
  );
}

export default Home;
