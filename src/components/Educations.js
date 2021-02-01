import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Educations = () => {
    return (
        <div>
             <div className="card">
                <div className="card-content">
                    <h6><strong>EDUCATIONS</strong></h6>
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Certificate</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Web Develoment</td>
                                <td>Jan 2018</td>
                                <td><Link to="#!" className="btn blue lighten-2">View</Link></td>
                            </tr>
                                <tr>
                                <td>Web Desing</td>
                                <td>Jan 2019</td>
                                <td><Link to="#!" className="btn blue lighten-2">View</Link></td>
                            </tr>
                            <tr>
                                <td>Graphic Design</td>
                                <td>May 2018</td>
                                <td><Link to="#!" className="btn blue lighten-2">View</Link></td>
                            </tr>
                            <tr>
                                <td>Other</td>
                                <td>Sep 2020</td>
                                <td><Link to="#!" className="btn blue lighten-2">View</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>                
        </div>
    );
}
 
export default Educations;