import React from 'react';

import Arrow from './arrows';
import Slide from './slide';


class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: false,
            currentSlide: 1,
            translateValue: 0
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

    handleScroll = (e) => {
        if (e.deltaY < 0) {
            this.prevSlide();
        }
        if (e.deltaY > 0) {
            this.nextSlide();
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
        const slider = document.getElementById('slider');
        const translateValue = slider.offsetWidth * -this.state.currentSlide;
        
        await this.setState({
            currentSlide: this.state.currentSlide + 1,
            translateValue
        });
        setTimeout(() => {
            this.setState({
                animating: false
            })
        }, 500);
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
        const slider = document.getElementById('slider');
        const translateValue = slider.offsetWidth * -(this.state.currentSlide - 2);

        await this.setState({
            currentSlide: this.state.currentSlide - 1,
            translateValue
        });
        setTimeout(() => {
            this.setState({
                animating: false
            })
        }, 500);
    }

    renderSlides = () => {
        return this.props.data.slides.map((slide, i) => {
            return <Slide key={i} data={slide} />;
        });
    }

    render() {
        return (
            <div id="slider">
                <div className="slides-container" style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: 'transform ease-out 0.45s'
                }}>
                {this.renderSlides()}
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