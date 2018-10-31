import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCard = (props) => {
    return (
        <div className={"project"}>
            <div className="project-wrapper">
                <div className="project-figure background-wrapper-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1525.243 1084.243">
                        <g transform="translate(-397.379 1.621)">
                            <line className="a l5" x2="411" y2="411" transform="translate(1485.5 669.5)"/>
                            <line className="a l6" x2="207" y2="207" transform="translate(1407.5 873.5)"/>
                        </g>
                    </svg>
                </div>
                <div className="project-content">
                    <div className="project-title">
                        {props.data.name}
                    </div>
                    <div className="project-summary">
                        {props.data.summary}
                    </div>
                    <Link className="project-link text-uppercase" to={"projects/" + props.data.slug}>
                        View Project
                        <FontAwesomeIcon icon="arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;