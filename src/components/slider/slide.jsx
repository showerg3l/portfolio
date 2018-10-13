import React from 'react';
import { height } from 'window-size';



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
        return (
            <div className="slide">
                <div ref="canvaswrapper" className="canvas-wrapper">
                    <canvas ref="canvas" className="slidebg"></canvas>
                </div>
                <div className="slide-wrapper">
                    <div className="slide-title">
                        {this.state.data.title}
                    </div>
                    <div className={
                        this.state.showInfo ? "moreinfo show" : "moreinfo"
                    }>
                        <button className="btn btn-red" onClick={this.showInfo}>i</button>
                        <div className="info">{this.state.data.title}</div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const wrapper = this.refs.canvaswrapper;
        const canvas = this.refs.canvas;
        canvas.setAttribute('width', wrapper.clientWidth);
        canvas.setAttribute('height', wrapper.clientHeight);
        const ctx = canvas.getContext("2d");

        const width = wrapper.clientWidth;
        const height = wrapper.clientWidth;
        
        
        //line 1
        ctx.beginPath();
        ctx.lineCap="round";
        ctx.lineWidth=2;
        ctx.moveTo(width / 5, 0);
        ctx.lineTo((width / 5) + 370, 370);
        ctx.strokeStyle="#5D0E0E";
        ctx.stroke();

        //line 2
        ctx.beginPath();
        ctx.lineWidth=1;
        ctx.moveTo((width / 3) + (width / 3), 0);
        ctx.lineTo((width / 3) + (width / 3) + 1000, 1000);
        ctx.strokeStyle="#5D0E0E";
        ctx.stroke();

        //line 3
        ctx.beginPath();
        ctx.moveTo(0, (height / 10));
        ctx.lineTo(1000, ((height / 10)) + 1000);
        ctx.strokeStyle="#5D0E0E";
        ctx.stroke();

        //rect 1
        
        
        ctx.beginPath();
        ctx.moveTo(0, (height / 10));
        ctx.lineTo(1000, ((height / 10)) + 1000);
        ctx.lineTo(1000, ((height / 10) * 2) + 1000);
        ctx.lineTo(0, (height / 10) * 2);
        ctx.closePath();
        ctx.fillStyle="#E8E8E8";
        ctx.strokeStyle="rgba(255,255,255,0)";
        ctx.stroke();
        ctx.fill();
        
        
        //line 4
        ctx.beginPath();
        ctx.lineWidth=3
        ctx.moveTo(0, (height / 10) * 2);
        ctx.lineTo(1000, ((height / 10) * 2) + 1000);
        ctx.strokeStyle="#5D0E0E";
        ctx.stroke();

        //line 5
        ctx.beginPath();
        ctx.lineWidth=1
        ctx.moveTo((width / 10) * 7, height);
        ctx.lineTo((height) - 200, ((width / 10) * 5) - 200);
        ctx.strokeStyle="#5D0E0E";
        ctx.stroke();
    }
    
}

export default Slide;