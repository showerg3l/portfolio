import React from 'react';



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
                <div className="image" style={{"backgroundImage" : "url("+this.state.data.imgurl+")"}}>
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
}

export default Slide;