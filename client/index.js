import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import materialize from 'materialize-css';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';

//import '../node_modules/materialize-css/dist/css/materialize.min.css';
// // import '../client/styles/custom.scss';
import store from './store/configureStore';
// // import {createRole, fetchRoles, saveRole} from './actions/roleAction';
// // import '../node_modules/toastr/build/toastr.min.css';
import { fetchUsers, userSaver, createUser, saveUser} from './actions/userAction';

// import '../node_modules/toastr/build/toastr.min.css'; X2

fetchUsers();
console.log(browserHistory);
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
