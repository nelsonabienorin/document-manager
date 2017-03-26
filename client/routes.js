import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import LandingPage from './components/LandingPage';
// import Login from './components/Login';
// import Register from './components/SignUp';
console.log('ROUTES BABA');
export default (
  <Route path = "/" component={LandingPage}>
  </Route>
);