import React from 'react';

import Header from '../components/header';
import Nav from '../components/nav';

const slider = () => {
    const container = document.getElementById('slider');
    const items = [];
}

const Home = () => {
    return (
        <div className="wrapper">
            <div className="content-left">
                <Header />
                <Nav />
            </div>
            <div className="content-right">
                <div className="content">
                    <div id="slider">
                        <div className="slide active">
                            <div className="placeholderimg">img1</div>
                            <div className="title">
                                Image 1
                            </div>
                        </div>
                        <div className="slide">
                            <div className="placeholderimg">img2</div>
                            <div className="title">
                                Image 2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;