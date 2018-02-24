import React from 'react';

import Header from '../components/header';
import Nav from '../components/nav';
import Slider from '../components/slider/slider';

const Home = ({location}) => {
    const sliderdata = {
        totalSlides: 3,
        slides: [
            {
                title: 'slide 1 title',
                imgurl: 'img1.jpg'
            },
            {
                title: 'slide 2 title',
                imgurl: 'img2.jpg'
            },
            {
                title: 'slide 3 title',
                imgurl: 'img3.jpg'
            }
        ]
    }
    return (
        <div className="content">
            <Slider data={sliderdata}></Slider>            
        </div>
    )
}

export default Home;