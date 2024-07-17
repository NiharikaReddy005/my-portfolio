import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';


const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo"/>
        <div className="portfoliomenu">
            <Link className="portfoliomenuitem">Home</Link>
            <Link className="portfoliomenuitem">About</Link>
            <Link className="portfoliomenuitem">Portfolio</Link>
            <Link className="portfoliomenuitem">Clients</Link>
        </div>
        <button className="navbarbtn">
          <img src={contactImg} alt="ContactMe" className="navbarbtnimg"/>Contact Me</button>
    </nav>
  )
}

export default Navbar