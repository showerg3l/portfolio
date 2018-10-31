import React from 'react';
import {Link} from 'react-router-dom';
import imgSuper from '../../images/rawpixel-603646-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SuuportTimerApp = () => {
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
                            <h2 className="text-red">Support Timer App</h2>
                        </div>
                        <div className="tags">
                            <span className="text-red">
                                Skills:&nbsp;
                            </span>
                            <span className="text-bold">
                                React . Redux . Electron . GraphQL . SASS . Design
                            </span>
                        </div>
                    </div>
                    <div className="project-body">
                        <div className="project-info">
                            <p>
                                This project involved building a platform to allow the support team better track and reliably report on time they spent resolving support tickets. It also required a direct integration with their client relationship management (CRM) system. 
                            </p>
                            <p>
                                The solution used was an Electron app to allow it to be easily deployed on any OS the company might use, combined with a Graphql API to integrate with the CRM. This graphql api sat as a middleware between any frontend clients we might need, either now or in future and any data stores or 3rd party systems such as the CRM.
                            </p>
                            <p>
                                The Electron app housed a React-redux interface which allowed the support team members to login via OAuth to authenticate, find their client, and track the time they have spent on that ticket for the client and submit that time to the CRM. It also allowed for the support to quickly assess the amount of support time the client had left and allow the company to be more proactive about contacting the client about upgrades to their contract.
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

export default SuuportTimerApp;