import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <h1>Callum Booth</h1>
            </Link>
            <h2><strong>Front-end Web Developer</strong></h2>
        </div>
    );
}

export default Header;