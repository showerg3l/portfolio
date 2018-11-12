import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import posed, { PoseGroup } from 'react-pose';

import ScrollToTop from './components/scrollToTop';

import Home from './pages/Home';
import About from './pages/About';

import Projects from './pages/Projects';
import Project from './pages/Project';

import Contact from './pages/Contact';

import Sidebar from './components/sidebar';

import data from './data.json';

const slidedata = [];

data.projects.map(project => {
    if (project.featured) {
        slidedata.push(project);
    }
    return project;
});

const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 250, beforeChildren: true },
    exit: { opacity: 0 }
});

const Root = ({ store }) => (
    <Router>
        <ScrollToTop>
            <Route
                render={({ location }) => (
                    <div className="wrapper">
                        <div className="content-left">
                            <Route path="/" component={Sidebar} />
                        </div>
                        <div className="content-right">
                        {console.log(location)}
                        <PoseGroup>
                                <RouteContainer key={location.pathname}>
                                    <Switch location={location}>
                                        <Route key="home" exact path="/" render={(props) => (
                                            <Home {...props} projects={slidedata} />
                                        )} />
                                        <Route key="about" exact path="/about" render={About} />
                                        <Route key="projects" exact path="/projects" render={(props) => (
                                            <Projects {...props} projects={data.projects} />
                                        )} />
                                        <Route key="projects-tag" exact path="/projects/:tag(PHP|SCSS|Moodle|JS|Design|React)" render={(props) => (
                                            <Projects {...props} projects={data.projects} />
                                        )} />
                                        {data.projects.map((project, i) => (
                                            <Route key={project.slug} exact key={i} path={"/projects/" + project.slug} render={(props) => (
                                                <Project {...props} project={project} />
                                            )} />    
                                        ))}
                                        <Route key="contact" exact path="/contact" render={Contact} />
                                    </Switch>
                                </RouteContainer>
                            </PoseGroup>
                        </div>
                    </div>
                )}
            />
        </ScrollToTop>
    </Router>
)

export default Root
