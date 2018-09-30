import React from 'react';
import {Link} from 'react-router-dom';
import imgSuper from '../../images/rawpixel-603646-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SuperTheme = () => {
    return (
        <div id="project" className="page-super-theme">
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
                            <h2 className="text-red">Super Theme</h2>
                        </div>
                        <div className="tags">
                            <span className="text-red">
                                Skills:&nbsp;
                            </span>
                            <span className="text-bold">
                                PHP . AMD . JQuery . Mustache . HTML . SCSS . Moodle . Design
                            </span>
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
    )
}

export default SuperTheme;