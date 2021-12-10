import React from 'react';
import './Css/Home.css'
import Nav from './Nav';
import homepage from '../Assets/homepage.jpg'

function Home() {
  return (
    <div >
    <Nav/>
     
    
    <div className="homepage-image">
      <img src="https://wallpaperaccess.com/full/418794.jpg" />
    </div>

    </div>
  );
}

export default Home;
