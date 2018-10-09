import React from 'react';
import {Link} from 'react-router-dom';


import ContactForm from '../components/contactForm';

import me from '../images/pablo-guerrero-568547-unsplash.jpg';

const Contact = () => {
    return (
        <div id="contact">
            <div className="page-content">
                {<div className="about-hero-image" style={{
                    "backgroundImage" : "url("+me+")"
                }}></div>}
                <div className="content">
                    <h2>How to get in touch</h2>
                    <p>
                        I'm currently looking for new employment and would I'd love to hear from you.
                    </p>

                    <div className="attributes">
                        <p>
                            <span className="text-red">e:</span>&nbsp; <Link className="text-bold" to="mailto:callum-booth@live.co.uk">callum-booth@live.co.uk</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;