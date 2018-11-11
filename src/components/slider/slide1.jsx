import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SliderTopSVG from './sliderTopSVG';
import SliderBottomSVG from './sliderBottomSVG';

class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    render() {
        let additionalclasses = 'fadeOut';
        if (this.props.currentSlide === this.props.data.i && this.state.loaded) {
            additionalclasses = 'fadeIn';
        }
        return (
            <div className={"slide " + additionalclasses}>
                <div className="background-wrapper-top">
                    <SliderTopSVG rotation="0" />
                </div>
                <div className="slide-wrapper">
                    <div className="slide-title">
                    <Link to={"projects/" + this.props.data.slug}>
                        {this.props.data.title}
                    </Link>
                    </div>
                    <div className={
                        this.props.data.showInfo ? "moreinfo show" : "moreinfo"
                    }>
                        <button className="btn btn-red" onClick={this.props.toggleInfo}>i</button>
                        <div className="info">
                            <p>
                                {this.props.data.summary}
                            </p>
                            <Link className="project-link text-uppercase text-white text-small" to={"projects/" + this.props.data.slug}>
                                View Project
                                <FontAwesomeIcon icon="arrow-right" style={{marginLeft: "0.5rem"}} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="background-wrapper-bottom">
                    <SliderBottomSVG rotation="0" />
                </div>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            loaded:true
        }), 0)
        
    }
    componentWillUnmount() {
        this.setState({
            loaded:false
        });
    }
    
}

export default Slide;