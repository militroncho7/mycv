import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Profile = () => {
    return (
        <div>
                <div className="card grey lighten-3">
                    <div className="card-image">
                        <img className="activator" src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1611935806/Logos%20VR/photo-linkedin_koilp7.jpg" alt="Victor M. Morales" />
                        <Link className="btn-floating halfway-fab waves-effect wave light brown lighten-2">
                            <i className="material-icons activator">+</i>
                        </Link>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            <strong>Víctor M. Morales Ruiz</strong>
                        </span>
                        <p className="grey-text text-darken-3"><strong>Desarrollador Web</strong></p>
                    </div>
                    <div className="card-reveal grey lighten-3">
                        <span className="card-title grey-text text-darken-3">
                            <b>Follow Me</b>
                            <i className="material-icons right">X</i>
                            <p className="flex-container">
                                <a href="https://www.linkedin.com/in/victormmorales/" target="_blank">
                                    <i className="fab fa-linkedin brown-text text-lighten-2 social-style"></i>
                                </a>

                                <a href="https://github.com/militroncho7" target="_blank">
                                    <i className="fab fa-github brown-text text-lighten-2 social-style"></i>
                                </a>                            
                                
                                <a href="https://www.instagram.com/militroncho7/" target="_blank">
                                    <i className="fab fa-instagram brown-text text-lighten-2 social-style"></i>
                                </a>
                                
                                <a href="https://www.facebook.com/milito.moralesruiz" target="_blank">
                                    <i className="fab fa-facebook-f brown-text text-lighten-2 social-style"></i>
                                </a>
                            </p>
                        </span>
                        <div className="card-image">                   
                            <img className="activator" src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1612112191/Logos%20VR/sobremi_2_do6yat.png" alt="Hobbies" />
                        </div>
                    </div>
                    {/* <div className="card-image">                        
                        <div className="card-content">
                            <img className="activator" src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1612112191/Logos%20VR/sobremi_2_do6yat.png" alt="Hobbies" />
                        </div>
                    </div> */}
                </div>                
            </div>
    );
}
 
export default Profile;
