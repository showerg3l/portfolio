import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Contact from './pages/Contact';

const Root = ({ store }) => (
    <Provider store={store}>  
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
            </div>
        </Router>
    </Provider>
)

export default Root