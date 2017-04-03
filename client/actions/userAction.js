import request from 'superagent';
import toastr from 'toastr';
import * as types from './actionTypes';


export const createUser = user => ({
  type: types.CREATE_USER,
  user
});


export const getUserSuccess = users => ({
  type: types.USER_SUCCESS,
  users
});

export const createUserSuccess = user => ({
  type: types.CREATE_USER_SUCCESS,
  user
});

export const userSaver = (user) => {
  request
  .post('/api/users')
  .send(user)
  .end((err, res) => {
    const createdUser = Object.assign({}, res.body.user, { token: res.body.token });
    window.location = '/login';
  });
};

export const saveUser = userJson => dispatch => userSaver(userJson)
  .then((savedUser) => {
    dispatch(createUserSuccess(savedUser));
  }).catch((error) => {
    throw (error);
  });

export const fetchUsers = () => {
  const token = localStorage.getItem('dms-user');
  return (dispatch) => {
    request
  .get('/api/users')
  .set({ 'x-access-token': token })
  .end((err, res) => {
    dispatch(getUserSuccess(res.body.users));
  });
  };
};

export const login = (userCredentials) => {
  return () => {
    request
    .post('/api/users/login')
    .send(userCredentials)
    .end((err, res) => {
      if (err) {
        toastr.error('Invalid Login Details');
      } else {
        const createdUser = Object.assign({}, res.body.user, { token: res.body.token });
        localStorage.setItem('dms-user', res.body.token);
        toastr.success('You have successfully login ');
        window.location = '/';
      }
    });
  };
};
