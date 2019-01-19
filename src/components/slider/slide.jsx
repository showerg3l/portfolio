import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SliderTopSVG from './sliderTopSVG';
import SliderBottomSVG from './sliderBottomSVG';

import SuperThemeTitle from '../../svgs/super-theme';


const Slide = (props) => {
    let svgMap = {
        "super-theme": SuperThemeTitle,
        "content-builder": SuperThemeTitle,
        "support-timer-app": SuperThemeTitle,
        "selfie-drone": SuperThemeTitle
    }

    const Title = svgMap[props.data.slug];

    let additionalclasses = 'fadeOut';
    if (props.currentSlide === props.data.i && props.loaded) {
        additionalclasses = 'fadeIn';
    }
    return (
        <div className={"slide " + additionalclasses}>
            <div className="background-wrapper-top">
                <SliderTopSVG rotation={props.data.rotate} />
            </div>
            <div className="slide-wrapper">
                <div className="slide-title">
                    <Link to={"projects/" + props.data.slug} onClick={(e) => props.delayTransition(e, props.data.slug)}>
                        <Title />
                    </Link>
                </div>
                <div className={
                    props.data.showInfo ? "moreinfo show" : "moreinfo"
                }>
                    <button className="btn btn-red" onClick={props.toggleInfo}>i</button>
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
                <SliderBottomSVG rotation={props.data.rotate} />
            </div>
        </div>
    )
}

export default Slide;