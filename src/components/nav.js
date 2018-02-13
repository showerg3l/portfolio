import React from 'react';
import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <div className="nav-container">
            <ul className="list-unstyled">
                <li className="nav-item strikethrough"><Link className="nav-link" to="/about">Who I am</Link></li>
                <li className="nav-item strikethrough"><Link className="nav-link" to="/skills">What I can do</Link></li>
                <li className="nav-item strikethrough"><Link className="nav-link" to="/work">What I have done</Link></li>
                <li className="nav-item strikethrough"><Link className="nav-link" to="/contact">How to get it touch</Link></li>
            </ul>
        </div>
    )
}

export default Nav;