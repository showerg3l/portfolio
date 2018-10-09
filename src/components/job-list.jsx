import React from 'react';

const Job = (props) => {
    console.log(props);
    return (
        <div className="job">
            <div className="company">
                <h4>{props.data.company}</h4>
            </div>
            <div className="job-title">
                {props.data.jobTitle}
            </div>
            <div className="duration">
                {props.data.duration}
            </div>
        </div>
    );
}

export default Job;