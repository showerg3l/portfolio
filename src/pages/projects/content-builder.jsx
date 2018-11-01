import React from 'react';
import {Link} from 'react-router-dom';
import imgSuper from '../../images/rawpixel-603646-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SuperTheme = () => {
    return (
        <div id="project" className="page-content-builder">
            <div className="project-image" style={{
                "backgroundImage": "url("+imgSuper+")"
            }}></div>
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
                        <div className="tags">
                            <span className="text-red">
                                Skills:&nbsp;
                            </span>
                            <span className="text-bold">
                                PHP . SCSS . AMD . React . Moodle . Design
                            </span>
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
    )
}

export default SuperTheme;