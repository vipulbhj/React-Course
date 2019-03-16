import React from 'react';

import './about.css';

const AboutPage = () => {
    return (
        <div className="AboutPageContainer">
            <div className="AboutInfo">
                <p> Hii, I am <span> Jon Doe </span> </p>
                <p>
                    Full Stack Developer with more than 4 years of Industry Experience in wide varity of role.
                </p>
            </div>
            <div className="AboutInfoHire">
                <p>Skills :-</p>
                <ul>
                    <li> React </li>
                    <li> Dot Net </li>
                    <li> React Native </li>
                </ul>
            </div>
            <div className="AboutInfoHire">
                <p>Programming Languages :-</p>
                <ul>
                    <li> Javascript </li>
                    <li> C# </li>
                    <li> Python </li>
                </ul>
            </div>
            <p> 
                Feel free to reach out for any freelance work using the contact Tabx
            </p>
        </div>
    );
}

export default AboutPage;