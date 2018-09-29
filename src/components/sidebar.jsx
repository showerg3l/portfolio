import React from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="name">
                <Link to='/'>
                    <h1>
                        <span className="text-red d-block w-100">
                            Callum
                        </span>
                        <span className="text-red-50 d-block w-100">
                            Booth
                        </span>
                    </h1>
                </Link>
            </div>
            <div className="job-title">
                <h4 className="text-light">
                    Front-end Developer
                </h4>
            </div>
            <div className="socials">
                <Link to="https://twitter.com/showerg3l" className="twitter"><FontAwesomeIcon icon={['fab',"twitter"]} /></Link>
                <Link to="https://github.com/callumbooth" className="github"><FontAwesomeIcon icon={['fab',"github"]} /></Link>
                <Link to="https://www.linkedin.com/in/callum-booth-6304a3b4/" className="linkedin"><FontAwesomeIcon icon={['fab',"linkedin-in"]} /></Link>
            </div>
            <div className="contact-info">
                <div className="email">
                    <span className="text-red">
                        E: &nbsp;
                    </span> 
                    <span className="text-bold text-uppercase"> 
                        callum-booth@live.co.uk
                    </span>
                </div>
                <div className="telephone">
                    <span className="text-red">
                        T: &nbsp;
                    </span> 
                    <span className="text-bold text-uppercase"> 
                        07843 225 721
                    </span>
                </div>
            </div>
            <div className="nav">
                <ul className="list-unstyled">
                    <li className="nav-item strikethrough"><Link className="nav-link" to="/about">Who I am</Link></li>
                    <li className="nav-item strikethrough"><Link className="nav-link" to="/skills">What I can do</Link></li>
                    <li className="nav-item strikethrough"><Link className="nav-link" to="/work">What I have done</Link></li>
                    <li className="nav-item strikethrough"><Link className="nav-link" to="/contact">How to get it touch</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;