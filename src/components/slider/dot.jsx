import React from 'react';

const Dot = (props) => {

    let additionalClasses = '';
    if (props.active) {
        additionalClasses = 'active';
    }
    return (
        <button id={'dot-' + props.count} 
            data-target={props.count + 1} 
            onClick={props.handleClick} 
            className={'dot ' + additionalClasses}></button>
    )
}
export default Dot;