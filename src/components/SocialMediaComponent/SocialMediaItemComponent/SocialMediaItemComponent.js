import React from 'react';
import './item.css';

const SocialMediaItemComponent = (props) => {
    return (
        <div className="SocialMediaItem">
            <a href={props.link} title={props.link}>
                {props.name}
            </a>
        </div>
    );
}

export default SocialMediaItemComponent;