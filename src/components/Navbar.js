import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <>
            <nav className="indigo darken-4">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">
                            <img className="logo" src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1610448149/Logos%20VR/LOGO_VR_Blanco_kzklcb.png" height="50px"/>
                        </Link>
                        <Link to="/" data-target="side-nav" className="sidenav-trigger">
                            <i className="material-icons"></i>
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/">
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/skills">
                                    <i className="fas fa-copy"></i> Skills
                                </Link>
                            </li>
                            <li>
                                <Link to="/experiences">
                                    <i className="fas fa-id-badge"></i> Experiences
                                </Link>
                            </li>
                            <li>
                                <Link to="/educations">
                                    <i className="fas fa-graduation-cap"></i> Educations
                                </Link>
                            </li>
                            <li>
                                <Link to="/portfolio">
                                    <i className="fas fa-address-card"></i> Portfolio
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul className="sidenav" id="side-nav">
                            <li>
                                <Link to="/">
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/skills">
                                    <i className="fas fa-copy"></i> Skills
                                </Link>
                            </li>
                            <li>
                                <Link to="/experiences">
                                    <i className="fas fa-id-badge"></i> Experiences
                                </Link>
                            </li>
                            <li>
                                <Link to="/educations">
                                    <i className="fas fa-graduation-cap"></i> Educations
                                </Link>
                            </li>
                            <li>
                                <Link to="/portfolio">
                                    <i className="fas fa-address-card"></i> Portfolio
                                </Link>
                            </li>
                        </ul>
        </>
    );
}
 
export default Navbar;
