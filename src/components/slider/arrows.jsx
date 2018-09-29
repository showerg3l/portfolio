import React from 'react';

const Arrow = (props) => {
    return (
        <div onClick={props.handleClick} className={`arrow ${props.direction}`}>
            <i className="arrowicon"></i>
        </div>
    )
}
export default Arrow;