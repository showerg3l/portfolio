import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SuperTheme = () => {
    return (
        <div id="project" className="page-content-builder">
            <div className="project-wrapper">
                <div className={"project-svg fadeIn"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1525 1084">
                        <g>
                            <line className="a l1" x2="113" y2="113" transform="translate(1383 0) rotate(90 0 0)"/>
                            <line className="a l2" x2="264" y2="264" transform="translate(512 0) rotate(90 0 0)"/>
                            <line className="a l3" x2="113" y2="113" transform="translate(586 0)"/>
                            <line className="a l4" x2="114" y2="114" transform="translate(806 0)"/>
                            <line className="a l5" x2="335" y2="335" transform="translate(1190 0)"/>
                            <line className="a l6" x2="117" y2="117" transform="translate(1100 0) rotate(90 0 0)"/>
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
                                <h2 className="text-red">Content Builder</h2>
                            </div>
                            <div className="meta">
                                <div className="tags">
                                    <h4>Skills used</h4>
                                    <p>
                                        PHP<br />
                                        JS<br />
                                        SCSS<br />
                                        React<br />
                                        Moodle<br />
                                        Design
                                    </p>
                                </div>
                                <div className="launched">
                                    <h4>Launched</h4>
                                    <p className="text-large">In Beta</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-body">
                            <div className="project-info">
                                <p>
                                    Moodle’s UX for creating content leaves much to be desired and the skill floor for creating beautiful and engaging courses is way higher than it should be. In comes a solution which is very familiar in other platforms **cough** WordPress **cough** and whilst slated by professionals, it does the job, and does it well, when done correctly. The drag and drop page builder.
                                </p>
                                <p>
                                    This Moodle plugin allows a Moodle user to build a layout and incorporate content with the simple drag and drop functionality we are all used to. It uses React’s shadow DOM with the context api as state management, this combined with react-beautiful-dnd made by Atlassian, make for a powerful combo. 
                                </p>
                                <p>
                                    Moodle uses AMD modules so this project required incorporating each component into the AMD system to allow the files to be integrated succinctly. 
                                </p>
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

export default SuperTheme;