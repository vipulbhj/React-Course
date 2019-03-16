import React from 'react';
import './header.css';

import {Link} from 'react-router-dom';

import NavigationComponent from './NavigationComponent/NavigationComponent';

const HeaderComponent = () => {
    return (
        <div className="HeaderContainer">
            <div className="brand">
                <Link to="/">My Portfolio</Link>
            </div>
            <NavigationComponent />
        </div>
    )
}

export default HeaderComponent;