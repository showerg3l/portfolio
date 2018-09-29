import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faGithub, faLinkedinIn);

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);
registerServiceWorker();
