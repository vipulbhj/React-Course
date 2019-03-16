import React from 'react';
import './nav.css';

import {Link} from 'react-router-dom';

const NavigationComponent = () => {
    return (
        <div className="NavigationContainer">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/blog"> Blogs </Link>
            <Link to="/contact"> Contact </Link>
        </div>
    )
}

export default NavigationComponent;