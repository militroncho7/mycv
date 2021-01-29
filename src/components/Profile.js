import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <img className="activator" src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1610448149/Logos%20VR/LOGO_VR_Negro_qwfqfh.png" alt="Victor M. Morales" />
                        <Link className="btnfloating halfway-fab waves-effect wave light yellow darken-2">
                            <i className="material-icons activator">more_vert</i>
                        </Link>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            Víctor M. Morales
                        </span>
                        <p>Full Stack Web Developer</p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text-darken-4">
                            Follow Me
                            <i className="material-icons right">close</i>
                            <p className="flex-container">
                                <i className="fab fa-facebook-f grey-text text-darken-4 social-style"></i>
                                <i className="fab fa-twitter grey-text text-darken-4 social-style"></i>
                                <i className="fab fa-google-plus-g grey-text text-darken-4 social-style"></i>
                                <i className="fab fa-instagram grey-text text-darken-4 social-style"></i>
                                <i className="fab fa-pinterest grey-text text-darken-4 social-style"></i>
                            </p>
                        </span>
                    </div>
                </div>                
            </div>
        )
    }
}
