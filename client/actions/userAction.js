import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';

// parameter user
export const createUser = user => ({
  type: types.CREATE_USER,
  user
});

// action creators
export const getUserSuccess = (users) => {
  return {
    type: types.USER_SUCCESS,
    users
  };
};

export const createUserSuccess = users => ({
  type: types.CREATE_USER_SUCCESS,
  users
});

export const userApi = () => {
  const { token } = JSON.parse(localStorage.getItem('x-access-token'));
  return fetch('/users', {
    method: 'GET',
    headers: {
      Authorization: token
    }
  })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then((users) => {
      return users;
    })
    .catch((error) => {
      throw error;
    });
};

export const userSaver = (user) => {
  const newBody = JSON.stringify(user);
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json'
    },
    body: newBody
  })
  .then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  })
  .then(user => user)
  .catch((error) => {
    throw error;
  });
};

export const saveUser = userJson => dispatch => userSaver(userJson)
  .then((savedUser) => {
    console.log('YOU WANT TO SAVE');
    dispatch(createUserSuccess(savedUser));
  }).catch((error) => {
    throw (error);
  });

export const fetchUsers = () => {
  console.log('I got to fetchUser in act');
  return (dispatch) => {
    return userApi()
      .then((users) => {
        console.log(users, 'fetch');
        return dispatch(getUserSuccess(users));
      })
  .catch((error) => { throw error; });
  };
};

