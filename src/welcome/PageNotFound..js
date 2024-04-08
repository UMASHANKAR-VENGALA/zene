import React from 'react';
import Image from './notfound.png';
import './home.css'

export default function PageNotFound() {
  return (
    <div className="not-found-container">
      <h1>Page Not Found</h1>
      <img src={Image} alt="Page Not Found" className="not-found-image" />
    </div>
  );
}