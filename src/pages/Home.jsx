import React from 'react';

import Slider from '../components/slider/slider';

const Home = (props) => {
    return (
        <div id="home" className="page-content">
            <div className="content">
                <Slider projects={props.projects}></Slider>
            </div>
        </div>
    )
}

export default Home;