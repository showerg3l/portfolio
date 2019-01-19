import React from 'react';


const LazyLoad = (props) => {
    console.log(props);
    let display = false;

    let scrolled = document.body.scrollTop;
    console.log(scrolled);
    return (
        <React.Fragment>
            {display ? props.children : 
            <div className="placeholder" style={{
                height: props.height + "px"
            }}>placeholder</div>
            }
        </React.Fragment>
    );
}


export default LazyLoad;
