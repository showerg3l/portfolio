import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home';

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
                </div>
            </div>
        </Router>
    </Provider>
)

export default Root