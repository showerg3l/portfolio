import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Project from './pages/Project';

import Header from './components/header';
import Nav from './components/nav';


const Root = ({ store }) => (
    <Provider store={store}>  
        <Router>
            <div className="wrapper">
                <div className="content-left">
                    <Header />
                    <Nav />
                </div>
                <div className="content-right">
                    <Route exact path="/" render={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/skills" component={Skills} />
                    <Route exact path="/work" component={Work} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/work/:id" component={Project} />
                </div>
            </div>
        </Router>
    </Provider>
)

export default Root