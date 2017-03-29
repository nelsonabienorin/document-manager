import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';
import request from 'superagent';

// parameter user
export const createUser = user => ({
  type: types.CREATE_USER,
  user
});

// action creators
export const getUserSuccess = (users) => ({
    type: types.USER_SUCCESS,
    users
  });

export const createUserSuccess = user => ({
  type: types.CREATE_USER_SUCCESS,
  user
});

// export const signUp = (dispatch, user) => {
//   request
//   .post('/api/users')
//   .send(user)
//   .end((err, res) => {
//     if (err) {
//       return console.log('Error :', err)
//     }
//     const createdUser = Object.assign({}, res.body.user, { token: res.body.token });
//     console.log('created user: ', createdUser);
//     // update localstorage;
//     localStorage.setItem('x-access-token', createdUser);
//     dispatch(createUserSuccess(createdUser));
//   });
// }

// export const userApi = () => {
//   const { token } = JSON.parse(localStorage.getItem('x-access-token'));
//   return fetch('/users', {
//     method: 'GET',
//     headers: {
//       Authorization: token
//     }
//   })
//     .then((response) => {
//       if (response.status >= 400) {
//         throw new Error('Bad response from server');
//       }
//       return response.json();
//     })
//     .then((users) => {
//       return users;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

export const userSaver = (user) => {
  console.log('am in user saver');
  console.log(user);
  request
  .post('/api/users')
  .send(user)
  .end((err, res) => {
    console.log(err, 'error');
    console.log(res, 'response object');
    console.log(res.body.message);
    console.log(res.body.token);
    const createdUser = Object.assign({}, res.body.user, { token: res.body.token });
    console.log('created user: ', createdUser);
    window.location = '/login';
    // dispatch(createUserSuccess(createdUser));
  });
};

export const saveUser = userJson => dispatch => userSaver(userJson)
  .then((savedUser) => {
    dispatch(createUserSuccess(savedUser));
  }).catch((error) => {
    throw (error);
  });

// export const fetchUsers = () => {
//   console.log('I got to fetchUser in act');
//   return (dispatch) => {
//     return userApi()
//       .then((users) => {
//         console.log(users, 'fetch');
//         return dispatch(getUserSuccess(users));
//       })
//   .catch((error) => { throw error; });
//   };
// };

export const login = (userCredentials) => {
  console.log('userCredentials');
  console.log(userCredentials, "userCredentials");
  return (dispatch) => {
    request
    .post('/api/users/login')
    .send(userCredentials)
    .end((err, res) => {
      if (err) {
        return console.log('Error :', err);
      }
      const createdUser = Object.assign({}, res.body.user, { token: res.body.token });
      localStorage.setItem('dms-user', res.body.token);
      console.log('created user: ', createdUser);
      window.location = '/';
    });
  };
};

