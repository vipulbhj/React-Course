import React from 'react';
import './homepage.css';

import PersonaInfoComponent from '../../components/PersonalInfoComponent/PersonalInfoComponent';
import SocialMediaComponent from '../../components/SocialMediaComponent/SocialMediaComponent';

const HomePage = (props) => {
    return (
        <div className="HomePageContainer"> 
            <PersonaInfoComponent />
            <SocialMediaComponent />
        </div>
    );
}

export default HomePage;