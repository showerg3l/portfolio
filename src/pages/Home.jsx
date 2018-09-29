import React from 'react';

import Header from '../components/header';
import Nav from '../components/sidebar';
import Slider from '../components/slider/slider';

import img1 from '../images/rawpixel-603646-unsplash.jpg';

const Home = ({location}) => {
    const sliderdata = {
        totalSlides: 4,
        slides: [
            {
                title: 'Moodle Theme',
                imgurl: img1
            },
            {
                title: 'Moodle Page Builder',
                imgurl: 'img2.jpg'
            },
            {
                title: 'GraphQL API',
                imgurl: 'img3.jpg'
            },
            {
                title: 'Electron App',
                imgurl: 'img4.jpg'
            }
        ]
    }
    return (
        <div id="home" className="page-content">
            <Slider data={sliderdata}></Slider>
        </div>
    )
}

export default Home;