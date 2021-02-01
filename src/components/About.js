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
                        
                        <br/>Especialidades: Javascript, ES6, NodeJS, MongoDB, React, Express, HTML,
                        SASS, CSS, jQuery, Web Designer, Adobe Photoshop, Responsive.<br/>

                        <br/>Os invito a visitar mis repositorios en
                        <a href=" https://github.com/militroncho7"> mi GitHub</a> para concocerme un poco más
                        </p>
                    </div>
                    <div className="card-action">
                        <h6 className="mt-bottom title">
                            <strong>INFORMACIÓN PERSONAL</strong>
                        </h6>
                    <div className="row mt">
                        <div className="col s12 m6 xl6">
                            <p><strong>Dirección:</strong> C/ Teruel 5, 3A</p>
                            <p><strong>Torrejón de Ardoz,</strong> Madrid (28850)</p>
                            <p><strong>Phone:</strong> 617 68 88 77</p>
                        </div>
                        <div className="s12 m6 l6 xl6">
                            <p><strong>Email:</strong> vm.moralesruiz@gmail.com</p>
                            <p><strong>Español:</strong> Competencia bilingüe nativa</p>
                            <p><strong>Ingles:</strong> Competencia básica limitada</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
