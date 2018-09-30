import React from 'react';

import Slider from '../components/slider/slider';

import img1 from '../images/rawpixel-603646-unsplash.jpg';

const Home = ({location}) => {
    const sliderdata = {
        totalSlides: 1,
        slides: [
            {
                title: 'Moodle Theme',
                imgurl: img1
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