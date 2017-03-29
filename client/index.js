import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import materialize from 'materialize-css';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
// // import '../client/styles/custom.scss';
import store from './store/configureStore';
// // import {createRole, fetchRoles, saveRole} from './actions/roleAction';
import { fetchUsers, userSaver, createUser, saveUser} from './actions/userAction';
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
