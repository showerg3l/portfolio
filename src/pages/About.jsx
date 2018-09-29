import React from 'react';

import Header from '../components/header';
import Nav from '../components/sidebar';

const About = () => {
    return (
        <div className="content">
            <div className="placeholderimg">
                <img src="" alt="me"/>
            </div>
            <div className="content">
                <p>
                    I’m a hard working and enthusiastic developer with a passion
                    for front end development. I’m also have an FdA in graphic design 
                    and spent over 3 years experience working in a busy marketing agency 
                    along with 5 years development experience which has given me a 
                    strong set of skills to deliver high quality products.
                </p>
                <p>
                    I’m currently working with Moodle a learning management system, 
                    where I have helped bring projects from initial concept right through 
                    to development and release. Working both individually and as part 
                    of a team, not only bring products to customers, I have also helped 
                    implement tools to help with the day to day, such as incorporating 
                    version control systems (git) and task managers (gulp, grunt).
                </p>
                <p>
                    My skill set is primarily Javascript, PHP, MySQL along with HTML and CSS.
                    I have strong experience CSS preprocessors using SASS and have built 
                    projects using React, and Electron. I also have good understanding of 
                    REST API’s and have built a GraphQL middleware to improve data flow 
                    between multiple front and back end systems, along with integrating into 
                    Salesforce CRM and HubSpot marketing platform.
                </p>
                <p>
                    Outside of work I enjoy computer games, having been ranked in the 0.1%
                    for multiple games and photography both of which give me inspiration 
                    to create new ideas and deal with problems in alternate ways.
                </p>
                <p> I’m currently working as full time developer but I’m looking for my 
                    next challenge in my career.
                </p>
            </div>
        </div>
    );
}

export default About;