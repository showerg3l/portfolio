import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

import Sidebar from './components/sidebar';


const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div className="wrapper">
                <div className="content-left">
                    <Sidebar />
                </div>
                <div className="content-right">
                    <Route exact path="/" render={Home} />
                    <Route exact path="/about" render={About} />
                    <Route exact path="/projects" render={Projects} />
                </div>
            </div>
        </Router>
    </Provider>
)

export default Root