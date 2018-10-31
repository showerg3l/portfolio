import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './pages/Home';
import About from './pages/About';

import Projects from './pages/Projects';
import Super from './pages/projects/super-theme';
import CB from './pages/projects/content-builder';
import STA from './pages/projects/support-timer-app';

import Contact from './pages/Contact';

import Sidebar from './components/sidebar';


const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
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
                                        <Route exact path="/" render={Home} />
                                        <Route exact path="/about" render={About} />
                                        <Route exact path="/projects" render={Projects} />
                                        <Route exact path="/projects/:tag(PHP|SCSS|Moodle|JS|Design|React)" render={Projects} />
                                        <Route exact path="/projects/super-theme" render={Super} />
                                        <Route exact path="/projects/content-builder" render={CB} />
                                        <Route exact path="/projects/support-timer-app" render={STA} />
                                        <Route exact path="/contact" render={Contact} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    </div>
                )}
            />
        </Router>
    </Provider>
)

export default Root
