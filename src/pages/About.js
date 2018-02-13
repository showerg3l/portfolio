import React from 'react';

import Header from '../components/header';
import Nav from '../components/nav';

const About = () => {
    return (
        <div className="wrapper">
            <div className="content-left">
                <Header />
                <Nav />
            </div>
            <div className="content-right">
                <div className="placeholderimg"></div>
                <div className="content">
                    About page
                </div>
            </div>
        </div>
    );
}

export default About;