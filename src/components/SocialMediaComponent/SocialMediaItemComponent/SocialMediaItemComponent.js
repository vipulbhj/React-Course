import React from 'react';
import './item.css';

import Icon from '@material-ui/core/Icon';

const SocialMediaItemComponent = (props) => {
    return (
        <div className="SocialMediaItem">
            <a href={props.link} title={props.link}>
                <Icon>{props.name}</Icon>
            </a>
        </div>
    );
}

export default SocialMediaItemComponent;