import React, { Component } from 'react';

import './theme.css';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent/HeaderComponent';

import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import BlogsPage from './Pages/BlogsPage/BlogsPage';
import PageNotFound from './Pages/404/404';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* If I am on '/'  route, please render HomePage component for me */}
          <Route path="/about" component={AboutPage} />
          <Route path="/blog" component={BlogsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
