import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SuperTheme = () => {
    return (
        <div id="project" className="page-super-theme">
            <div className="project-wrapper">
                <div className={"project-svg fadeIn"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1525 1084">
                        <g>
                            <line className="a l1" x2="113" y2="113" transform="translate(1383 0)"/>
                            <line className="a l2" x2="264" y2="264" transform="translate(512 0)"/>
                            <line className="a l3" x2="113" y2="113" transform="translate(586 0)"/>
                            <line className="a l4" x2="114" y2="114" transform="translate(806 0)"/>
                            <line className="a l5" x2="335" y2="335" transform="translate(1190 0)"/>
                            <line className="a l6" x2="117" y2="117" transform="translate(1100 0)"/>
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
                                <h2 className="text-red">Super Theme</h2>
                            </div>
                            <div className="meta">
                                <div className="tags">
                                    <h4>Skills used</h4>
                                    <p>
                                        PHP<br />
                                        JS<br />
                                        Mustache<br />
                                        SCSS<br />
                                        Moodle<br />
                                        Design
                                    </p>
                                </div>
                                <div className="launched">
                                    <h4>Launched</h4>
                                    <p className="text-large">September 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-body">
                            <div className="project-info">
                                <p>
                                    Described as a Moodle theme to end all Moodle theme, this project solved clear objectives that HowToMoodle had set out. Improve efficiency of their theme development process, improve the roll out process of future updates and improve the UX and UI of configuring the theme.
                                </p>
                                <p>
                                    The solution I proposed was taken through initial idea to a prototype and then developed into the working and releasable version. It featured a myriad of new features including an import and export of the theme settings.
                                </p>
                                <p>
                                    The end result was an average of 50% reduced time to create a Moodle look which matches the clients website. An scalable system which allowed new functionality to be deployed to old and new clients alike.
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