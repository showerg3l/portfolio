import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SliderTopSVG from './sliderTopSVG';
import SliderBottomSVG from './sliderBottomSVG';

const Slide = (props) => {
        
    let additionalclasses = 'fadeOut';
    if (props.currentSlide === props.data.i) {
        additionalclasses = 'fadeIn';
    }
    return (
        <div className={"slide " + additionalclasses}>
            <div className="background-wrapper-top">
                <SliderTopSVG rotation="45" />
            </div>
            <div className="slide-wrapper">
                <div className="slide-title">
                    <Link to={"projects/" + props.data.slug}>
                        {props.data.title}
                    </Link>
                </div>
                <div className={
                    props.data.showInfo ? "moreinfo show" : "moreinfo"
                }>
                    <button className="btn btn-red" onClick={props.showInfo}>i</button>
                    <div className="info">
                        <p>
                            {props.data.summary}
                        </p>
                        <Link className="project-link text-uppercase text-white text-small" to={"projects/" + props.data.slug}>
                            View Project
                            <FontAwesomeIcon icon="arrow-right" style={{marginLeft: "0.5rem"}} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="background-wrapper-bottom">
                <SliderBottomSVG rotation="45" />
            </div>
        </div>
    )
}

export default Slide;