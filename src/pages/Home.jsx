import React from 'react';

import Slider from '../components/slider/slider';

const Home = ({location}) => {
    const sliderdata = {
        totalSlides: 1,
        slides: [
            {
                title: 'Super Theme',
                angle: 0
            },
            {
                title: 'Content Builder',
                angle: 90,
            },
            {
                title: 'Support Timer App',
                angle: 45
            }
        ]
    }
    return (
        <div id="home" className="page-content">
            <div className="content">
                <Slider data={sliderdata}></Slider>
            </div>
        </div>
    )
}

export default Home;