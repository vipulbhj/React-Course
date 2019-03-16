import React from 'react';
import './blog.css';

const BlogPage = ({blog}) => {
    return (
        <div className="BlogPageContainer">
            <h3>{blog.name}</h3>
            <hr />
            <p>
                {blog.data}
            </p>
        </div>
    )
}

export default BlogPage;