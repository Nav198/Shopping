import React from 'react';
// import './App.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';

function Nav() {
    const Navstyle={
        color:'Red'
    };

    const handleLogout =() =>{
        
        localStorage.removeItem("auth");
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
     
     
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/shop">Shop</a>
          </li>
          <li className="nav-item">
            <a onClick={handleLogout} className="nav-link" href="/">Logout</a>
          </li>
        
        </ul>
        
      </div>
    </div>
  </nav>
  );
}

export default Nav;
