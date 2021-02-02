import React from 'react'

const About = () => {
    return (
        <div>
                <div className="card grey lighten-3">
                    <div className="card-content">
                        <h6 className="mt-bottom title">
                            <strong >SOBRE MÍ</strong>
                        </h6>
                        <p className="grey-textdarken-1">
                        <b>FullStack Developer: </b>
                        Certificado en el bootcamp Part-Time en Ironhack Madrid, compaginándolo<br/>a la
                        vez con mi actual trabajo en el Departamento de Compras de El Corte Ingles.<br/>
                        Me gustaría seguir aprendiendo y desarrollándome como Front Developer realizando
                        proyectos que me presenten retos. ¡Siempre en continuo aprendizaje! <br/>
                        
                        <br/>Especialidades: <b>Javascript, ES6, NodeJS, MongoDB, React, Express, HTML,
                        SASS, CSS, jQuery, Web Designer, Adobe Photoshop, Responsive.</b><br/>

                        <br/>Os invito a visitar mis repositorios en
                        <a href=" https://github.com/militroncho7"> mi GitHub</a> para concocerme un poco más.
                        </p>
                    </div>
                    <div className="card-action">
                        <h6 className="mt-bottom title">
                            <strong>INFORMACIÓN PERSONAL</strong>
                        </h6>
                    <div className="row mt">
                        <div className="col s12 m6 xl6">
                            <p><strong><b>Torrejón de Ardoz</b>, Madrid (28850)</strong></p>
                            <p><strong><b>Teléfono:</b></strong>617 68 88 77</p>
                            <p><strong><b>Carnet Conducir:</b> B y A2</strong> </p>
                        </div>
                        <div className="col s12 m6 l6 xl6">
                            <p><strong><b>Email:</b></strong> vm.moralesruiz@gmail.com</p>
                            <p><strong><b>Español:</b></strong> Competencia bilingüe nativa</p>
                            <p><strong><b>Ingles:</b></strong> Competencia básica limitada</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
