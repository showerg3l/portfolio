import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Super from './pages/projects/super-theme';
import CB from './pages/projects/content-builder';

import Sidebar from './components/sidebar';


const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div className="wrapper">
                <div className="content-left">
                    <Route path="/" component={Sidebar} />
                </div>
                <div className="content-right">
                    <Route exact path="/" render={Home} />
                    <Route exact path="/about" render={About} />
                    <Route exact path="/projects" render={Projects} />
                    <Route exact path="/projects/:tag(PHP|SCSS|Moodle|JS|Design|React)" render={Projects} />
                    <Route exact path="/projects/super-theme" render={Super} />
                    <Route exact path="/projects/content-builder" render={CB} />
                </div>
            </div>
        </Router>
    </Provider>
)

export default Root
