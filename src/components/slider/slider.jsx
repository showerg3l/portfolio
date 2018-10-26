import React from 'react';

import Arrow from './arrows';
import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide3 from './slide3';


class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: false,
            currentSlide: 1
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    checkIfSidebar(path) {
        let isSidebar = false;
        path.map((item,i) => {
            if (item.classList === undefined) {
                return
            }
            if (item.classList.contains("sidebar")) {
                isSidebar = true;
            }
            return;
        });
        console.log(isSidebar);
        return isSidebar;
    }

    handleScroll = (e) => {
        console.log(e);
        let isSidebar = this.checkIfSidebar(e.path);

        if (!isSidebar) {
            if (e.deltaY < 0) {
                this.prevSlide();
            }
            if (e.deltaY > 0) {
                this.nextSlide();
            }
        }
    }

    async nextSlide() {
        if (this.state.currentSlide === this.props.data.totalSlides) {
            return;
        }
        if (this.state.animating) {
            return;
        }
        
        await this.setState({
            animating: true
        })
        
        await this.setState({
            currentSlide: this.state.currentSlide + 1,
        });
        setTimeout(() => {
            this.setState({
                animating: false
            })
        }, 1500);
    }

    async prevSlide() {
        if (this.state.currentSlide === 1) {
            return;
        }
        if (this.state.animating) {
            return;
        }
        await this.setState({
            animating: true
        })

        await this.setState({
            currentSlide: this.state.currentSlide - 1,
        });
        setTimeout(() => {
            this.setState({
                animating: false
            })
        }, 1500);
    }

    render() {
        return (
            <div id="slider">
                <div className="slides-container" style={{
                    transition: 'transform ease-out 0.45s'
                }}>
                    {this.props.data.slides.map((slide, i) => {
                        slide.i = i + 1;
                        if (i % 3 === 0) {
                            return <Slide1 key={i} data={slide} currentSlide={this.state.currentSlide} />;
                        } else if (i % 3 === 1) {
                            return <Slide2 key={i} data={slide} currentSlide={this.state.currentSlide} />;
                        } else {
                            return <Slide3 key={i} data={slide} currentSlide={this.state.currentSlide} />;   
                        }
                        
                    })}
                </div>
                <div className="pager">
                </div>
                <div className="arrows">
                    <Arrow direction="prev" handleClick={this.prevSlide}></Arrow>
                    <Arrow direction="next" handleClick={this.nextSlide}></Arrow>
                </div>
            </div>
        )
    }
}

export default Slider;