import React from 'react';
import Profile from './Profile';
import About from './About';
import Skills from './Skills';
import Experiences from './Experiences';
import Educations from './Educations';
import Portfolio from './Portfolio';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <section>
            <div className="container">
                <div className="row">
                    <div className="col s12 m4 l3">
                        <Profile />
                    </div>
                    <div className="col s12 m8 l9">
                        <About />
                        <Skills />
                        <Experiences />
                        <Educations />
                        <Portfolio />
                    </div>
                </div>
            </div>
            </section>

            <Footer />
            
        </div>
    );
}
 
export default Home;
