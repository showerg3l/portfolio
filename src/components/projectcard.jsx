import React from 'react';
import {Link} from 'react-router-dom';
const ProjectCard = (props) => {
    let additionalClasses;
    additionalClasses = props.data.featured ? 'col-12' : 'col-6';
    return (
        <div className={"project " + additionalClasses}>
            <div className="project-wrapper">
                <img src={props.data.image} alt="" className="project-image"/>
                <div className="project-button">
                    <Link className="btn btn-red" to={"projects/" + props.data.slug}>i</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;