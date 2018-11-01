import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            showInfo: false
        };
    }

    showInfo = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            showInfo: !prevState.showInfo
          }));
    }

    render() {
        
        let additionalclasses = 'fadeOut';
        if (this.props.currentSlide === this.props.data.i) {
            additionalclasses = 'fadeIn';
        }
        return (
            <div className={"slide " + additionalclasses}>
                <div ref="bgwrappertop" className="background-wrapper-top">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1525.243 1084.243">
                        <g transform="translate(-397.379 1.621)">
                            <line className="a l1" x2="0" y2="435" transform="translate(1703 0.5)"/>
                            <line className="a l2" x2="0" y2="369" transform="translate(1001 0.5)"/>
                        </g>
                    </svg>
                </div>
                <div className="slide-wrapper">
                    <div className="slide-title">
                        <Link to={"projects/" + this.state.data.slug}>
                            {this.state.data.title}
                        </Link>
                    </div>
                    <div className={
                        this.state.showInfo ? "moreinfo show" : "moreinfo"
                    }>
                        <button className="btn btn-red" onClick={this.showInfo}>i</button>
                        <div className="info">
                            <p>
                                {this.state.data.summary}
                            </p>
                            <Link className="project-link text-uppercase text-white text-small" to={"projects/" + this.state.data.slug}>
                                View Project
                                <FontAwesomeIcon icon="arrow-right" style={{marginLeft: "0.5rem"}} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div ref="bgwrapperbottom" className="background-wrapper-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1525.243 1084.243">
                        <g transform="translate(-397.379 1.621)">
                            <line className="a l3" x2="0" y2="922" transform="translate(746 186.5)"/>
                            <line className="a l4" x2="0" y2="1080" transform="translate(904 30 )"/>
                            <line className="a l5" x2="0" y2="411" transform="translate(1691 669.5)"/>
                            <line className="a l6" x2="207" y2="207" transform="translate(1407.5 873.5)"/>
                            <path className="b b1" d="M399,159.5l919.508,919.508h-218.3L399,379.211Z" style={{transform: "rotate(45deg) translate(100px, -80px)", transformOrigin: "50%"}}/>
                        </g>
                    </svg>
                </div>
            </div>
        )
    }

    componentDidMount() {

    }
    
}

export default Slide;