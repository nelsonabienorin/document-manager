import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/SignUp';

// console.log('ROUTES BABA');
export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path = "/signup" component={Register}/>
    <Route path = "/login" component={Login}/>
  </Route>
);
