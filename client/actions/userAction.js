import request from 'superagent';
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

export const updateUserSuccess = user => ({
  type: types.UPDATE_USER_SUCCESS,
  user
});


export const deleteUserSuccess = user => ({
  type: types.DELETE_USER_SUCCESS,
  user
});


export const saveUser = user => (dispatch) => {
  request
      .post('/api/users')
      .send(user)
      .end((err, res) => {
        if (err) {
          Materialize.toast('Unable to save', 4000, 'rounded');
        } else {
          dispatch(createUserSuccess(user) );
          Materialize.toast('Successful', 4000, 'rounded');
          window.location = '/login';
        }
      });
};

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
        Materialize.toast('Invalid Login Details', 4000, 'rounded');
      } else {
        const createdUser = Object.assign({}, res.body.user, { token: res.body.token });
        localStorage.setItem('dms-user', res.body.token);
        Materialize.toast('You have successfully login ', 4000, 'rounded');
        window.location = '/';
      }
    });
  };
};


export const updateUser = (user) => {
  console.log('Do you wanna update user?');
  const token = localStorage.getItem('dms-user');
  return (dispatch) => {
    request
  .put(`/api/users/${user.id}`)
  .send(user)
  .set({ 'x-access-token': token })
  .end((err, res) => {
    if (err) {
      return err;
    }
    dispatch(updateUserSuccess(res.body.document));
    window.location = '/register';
    Materialize.toast('User successfully updated', 4000, 'rounded');
  });
  };
};


export const deleteUser = (id) => {
  const token = localStorage.getItem('dms-user');
  return (dispatch) => {
    request
  .delete(`/api/users/${id}`)
  .send(document)
  .set({ 'x-access-token': token })
  .end((err, res) => {
    if (err) {
      return err;
    }
    dispatch(deleteUserSuccess(res.body.document));
    window.location = '/register';
    Materialize.toast('User successfully deleted', 4000, 'rounded');
  });
  };
};
