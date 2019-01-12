import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faTwitter, faGithub, faLinkedinIn, faArrowLeft, faArrowRight);


ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
registerServiceWorker();

