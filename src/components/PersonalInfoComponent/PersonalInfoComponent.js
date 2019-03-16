import React from 'react';

import myImage from '../../appData/myImage.jpeg';

import './personalinfo.css';

const PersonalInfoComponent = () => {
    return (
        <div className="PersonalInfoComponentContainer">
            <img src={myImage} alt="Profile" />
            <p>Computer Science Engineer | React | React Native | Single Page Apps | ASP Dot Net | Java | C and C++</p>
        </div>
    );
}

export default PersonalInfoComponent;