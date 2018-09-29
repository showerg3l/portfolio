import React from 'react';
import {Link} from 'react-router-dom';
const ProjectCard = (props) => {
    let additionalClasses;
    additionalClasses = props.data.featured ? 'col-12' : 'col-6';
    return (
        <div className={"project " + additionalClasses}>
            <Link to={"projects/"+props.data.slug}>
                <div className="project-wrapper">
                    {props.data.name}
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard;