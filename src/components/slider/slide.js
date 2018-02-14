import React from 'react';

const Slide = (props) => {
    return (
        <div className="slide">
            <div className="placeholderimg">{props.data.imgurl}</div>
            <div className="title">
                {props.data.title}
            </div>
        </div>
    )
}

export default Slide;