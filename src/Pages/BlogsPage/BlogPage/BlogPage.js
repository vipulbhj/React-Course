import React from 'react';
import {connect} from 'react-redux';
import './blog.css';

const BlogPage = ({blogs, match}) => {
    const blog = blogs[match.params.id - 1];
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

const mapStateToProps = (state) => {
    return {
       blogs: state.blogList 
    }
}

export default connect(mapStateToProps)(BlogPage);