import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from "react-transition-group";

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
                            <TransitionGroup>
                                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                                    <Switch location={location}>
                                        <Route exact path="/" render={(props) => (
                                            <Home {...props} projects={slidedata} />
                                        )} />
                                        <Route exact path="/about" render={About} />
                                        <Route exact path="/projects" render={(props) => (
                                            <Projects {...props} data={data} />
                                        )} />
                                        <Route exact path="/projects/:tag(PHP|SCSS|Moodle|JS|Design|React)" render={(props) => (
                                            <Projects {...props} projects={data.projects} />
                                        )} />
                                        {data.projects.map((project, i) => (
                                            <Route exact key={i} path={"/projects/" + project.slug} render={(props) => (
                                                <Project {...props} project={project} />
                                            )} />    
                                        ))}
                                        <Route exact path="/contact" render={Contact} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    </div>
                )}
            />
        </ScrollToTop>
    </Router>
)

export default Root
