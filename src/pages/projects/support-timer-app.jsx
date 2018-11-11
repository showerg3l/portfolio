import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SuuportTimerApp = () => {
    return (
        <div id="project" className="page-super-theme">
            <div className="project-wrapper">
                <div className={"project-svg fadeIn"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1525 1084">
                        <g>
                            <line className="a l1" x2="113" y2="113" transform="translate(1383 0) rotate(45 0 0)"/>
                            <line className="a l2" x2="264" y2="264" transform="translate(512 0) rotate(45 0 0)"/>
                            <line className="a l3" x2="113" y2="113" transform="translate(586 0)"/>
                            <line className="a l4" x2="114" y2="114" transform="translate(806 0)"/>
                            <line className="a l5" x2="335" y2="335" transform="translate(1190 0)"/>
                            <line className="a l6" x2="117" y2="117" transform="translate(1100 0) rotate(45 0 0)"/>
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
                                <h2 className="text-red">Support Timer App</h2>
                            </div>
                            <div className="meta">
                                <div className="tags">
                                    <h4>Skills used</h4>
                                    <p>
                                        React<br />
                                        Redux<br />
                                        Electron<br />
                                        GraphQL<br />
                                        SASS<br />
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
        </div>
    )
}

export default SuuportTimerApp;