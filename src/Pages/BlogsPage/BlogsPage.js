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
        return (
            <div className="BlogsPageContainer">
            {
                DATA.map((item) => {
                    return (
                        <BlogCard key={item.id}
                            to={`${match.url}/${item.id}`}
                            name={item.name}
                            data={item.data.substring(0, 100) + " ..."}
                        />
                    )
                })
            }
            </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogList: state.blogList
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
                render={() => <BlogPage blog={{}} />}
            />
            <Route exact
                path={match.path}
                component={ReduxifiedDefaultBlogsPage}
            />
        </Switch>
    )
}

export default BlogsPage;