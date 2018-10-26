import React from 'react';

import Slider from '../components/slider/slider';

const Home = ({location}) => {
    const sliderdata = {
        totalSlides: 3,
        slides: [
            {
                title: 'Super Theme',
                summary: 'A Moodle theme to end all Moodle themes',
                slug: 'super-theme'
            },
            {
                title: 'Content Builder',
                summary: 'A well known solution, integrated into a new platform',
                slug: 'content-builder'
            },
            {
                title: 'Support Timer App',
                summary: 'A Moodle theme to end all Moodle themes',
                slug: 'support-timer-app'
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