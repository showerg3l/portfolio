import React from 'react';

import Slider from '../components/slider/slider';

const Home = (props) => {
    return (
        <div id="home">
            <div className="page-content">
            <div className="content">
                <Slider projects={props.projects}></Slider>
            </div>
            </div>
        </div>
    )
}

export default Home;