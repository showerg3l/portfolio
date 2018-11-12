import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Project = (props) => {
    return (
        <div id="project" className={"page-"+props.project.slug}>
            <div className="project-wrapper">
                <div className={"project-svg fadeIn"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1525 1084">
                        <g>
                            <line className="a l1" x2="113" y2="113" transform={"translate(1383 0) rotate("+props.project.rotate+" 0 0)"}/>
                            <line className="a l2" x2="264" y2="264" transform={"translate(512 0) rotate("+props.project.rotate+" 0 0)"}/>
                            <line className="a l3" x2="113" y2="113" transform="translate(586 0)"/>
                            <line className="a l4" x2="114" y2="114" transform="translate(806 0)"/>
                            <line className="a l5" x2="335" y2="335" transform="translate(1190 0)"/>
                            <line className="a l6" x2="117" y2="117" transform={"translate(1100 0) rotate("+props.project.rotate+" 0 0)"}/>
                            <path className="b b1" d="M587,0 l112,112 h217 l-112,-112 Z"/>
                        </g>
                    </svg>
                </div>
                <div className="page-content">
                    <div className="content">
                        <div className="project-header">
                            <Link className="returnto text-uppercase text-bold" to="/projects">
                                <FontAwesomeIcon icon="arrow-left" />
                                Projects
                            </Link>
                            <div className="project-title">
                                <h2 className="text-red">{props.project.name}</h2>
                            </div>
                            <div className="meta">
                                <div className="tags">
                                    <h4>Skills used</h4>
                                    <div className="tags-list">
                                        {props.project.tags.map((tag, i) => {
                                            return <div className="tag-item" key={i}>{tag}</div>;
                                        })}
                                    </div>
                                </div>
                                <div className="launched">
                                    <h4>Launched</h4>
                                    <p className="text-large">{props.project.launched}</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-body">
                            <div className="project-info" dangerouslySetInnerHTML={{__html: props.project.content}} >
                            </div>
                            <div className="additonal-images">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;