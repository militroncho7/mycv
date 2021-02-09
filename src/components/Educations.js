import React from 'react';

const Educations = () => {
    return (
        <div>
             <div className="card grey lighten-3">
                <div className="card-content">
                    <h6 className="mt-bottom title"><strong>FORMACION</strong></h6>
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Certificación</th>
                                <th>Fecha</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>Udemy:</b> React-Hooks-Context-Redux-MERN</td>
                                <td>Mar 2021 (44,5 horas)</td>
                                <td><img src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1612209680/Logos%20VR/udemy_1_rnfwjg.png" width="70px" /></td>
                            </tr>
                            <tr>
                                <td><b>Ironhack:</b> Bootcamp Desarollo Web</td>
                                <td>Oct 2019 - Abr 2020</td>
                                <td><img src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1612209476/Logos%20VR/IH_n54smr.png" width="40px" /></td>
                            </tr>
                            <tr>
                                <td><b>URJC:</b> Grado Comunicación Audivisual</td>
                                <td>Sept 2011 - May 2015</td>
                                <td><img src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1612209680/Logos%20VR/urjc_opjqcl.png" width="40px" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>                
        </div>
    );
}
 
export default Educations;
