import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCard = (props) => {
    let additionalClasses = props.data.featured ? 'featured' : '';
    return (
        <div className={"project " + additionalClasses}>
            <div className="project-wrapper">
                <img src={props.data.image} alt="" className="project-image"/>
                <div className="project-content">
                    <div className="project-title">
                        {props.data.name}
                    </div>
                    <div className="project-summary">
                        {props.data.summary}
                    </div>
                    <Link className="project-link text-uppercase text-bold" to={"projects/" + props.data.slug}>
                        View Project
                        <FontAwesomeIcon icon="arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;