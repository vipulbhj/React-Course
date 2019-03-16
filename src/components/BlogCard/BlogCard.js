import React from 'react';
import {Link} from 'react-router-dom';

import './blogcard.css';

const BlogCard = ({to, name, data}) => {
    return (
        <div className="BlogCard">
            <h3><Link to={to}>{name}</Link> </h3>
            <p>{data}</p>    
        </div>
    )
}

export default BlogCard;