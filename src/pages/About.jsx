import React from 'react';
import posed from 'react-pose';

import JobList from '../components/job-list';

const jobData = [
    {
        company: "HowToMoodle",
        jobTitle: "Web Designer & Developer",
        duration: "May 2016 - Present"
    },
    {
        company: "RTITB",
        jobTitle: "Developer",
        duration: "June 2015 - April 2016"
    },
    {
        company: "Yarrington",
        jobTitle: "Designer & Developer",
        duration: "September 2010 - February 2015"
    }
];

const Box = posed.div({
    enter: {
        opacity: 1,
        delay: 100
    },
    exit: {
        opacity: 0
    }
});

const Box2 = posed.div({
    enter: {
        opacity: 1,
        delay: 200
    },
    exit: {
        opacity: 0
    }
});

const Box3 = posed.div({
    enter: {
        opacity: 1,
        delay: 400
    },
    exit: {
        opacity: 0
    }
});


const About = () => {
    return (
        <div id="about">
            <div className="page-content">
                <div className="content">
                    <div className="about-me">
                        <Box>
                            <h2>Who Am I</h2>
                        </Box>
                        <Box2 className="attributes">
                            <p>
                                <span className="text-red">Age:</span><span className="text-bold">&nbsp;25</span>
                            </p>
                            <p>
                                <span className="text-red">Location:</span><span className="text-bold">&nbsp;Newport (Shropshire)</span>
                            </p>
                            <p>
                                <span className="text-red">Skills:</span><span className="text-bold">&nbsp; PHP . JS . React . HTML . CSS</span>
                            </p>
                        </Box2>
                        <Box3 className="row">
                            <div className="desc col-6">
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
                            <div className="job-history col-6 mt-3">
                                <h3>
                                    Previous experience
                                </h3>
                                <div className="job-list">
                                    {jobData.map((job, i) => {
                                        return <JobList key={i} data={job}/>
                                    })}
                                </div>
                            </div>
                        </Box3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;