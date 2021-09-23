import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className="footer indigo darken-4">
            <p>Designed by <span>Víctor Ruiz &copy;</span> {year}</p>
            <a href="https://www.linkedin.com/in/victormmorales/">
            <img src="logo-vr.png" alt="logo-vr"/>
            </a>          
        </div>
    );
}
 
export default Footer;