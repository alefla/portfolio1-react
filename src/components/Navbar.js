import React from 'react';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//components
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                {/*<a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>*/}
                <a href="#" style={{textDecoration: 'none'}}><h1 style={{color: 'whitesmoke', padding: '1rem 0'}}>Logo</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-100} className="nav-link" >about me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="services" offset={-100} className="nav-link" href="#">services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-100} className="nav-link" >experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-100} className="nav-link" >portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" offset={-100} className="nav-link" >contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
            
export default Navbar;