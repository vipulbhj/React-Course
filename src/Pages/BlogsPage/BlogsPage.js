import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './blogs.css';
import * as actionTypes from '../../store/action';
import BlogCard from '../../components/BlogCard/BlogCard';
import BlogPage from './BlogPage/BlogPage';

class DefaultBlogsPage extends Component {

    componentDidMount() {
        console.log('Place holder for asking for data');
        this.props.downloadBlogList()
    }

    render() {
        const {match} = this.props;
        const DATA = this.props.blogList;

        let returnData = (
            DATA.map((item) => {
                return (
                    <BlogCard key={item.id}
                        to={`${match.url}/${item.id}`}
                        name={item.name}
                        data={item.data.substring(0, 100) + " ..."}
                    />
                )
            })
        ) 

        return (
            <div className="BlogsPageContainer">
                {
                    this.props.isOnline ? returnData : <p>Offline</p> 
                }     
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogList: state.blogList,
        isOnline: state.isOnline
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateBlogList: () => dispatch({type: actionTypes.UPDATE_BLOG_LIST}),
        downloadBlogList: () => dispatch(actionTypes.downloadBlogList())
    }
}

const ReduxifiedDefaultBlogsPage = connect(mapStateToProps, mapDispatchToProps)(DefaultBlogsPage);

const BlogsPage = ({match}) => {
    return (
        <Switch>
            <Route path={`${match.path}/:id`}
                component={BlogPage}/> }
            />
            <Route exact
                path={match.path}
                component={ReduxifiedDefaultBlogsPage}
            />
        </Switch>
    )
}

export default BlogsPage;