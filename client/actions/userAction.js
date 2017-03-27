import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';
import request from 'superagent';

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
  console.log('am in user saver');
  console.log(user);
  request
  .post('/api/users')
  .send(user)
  .set('Accept', 'application/json')
  .end(function(err, res){
    console.log(res);
    // Calling the end function will send the request
  })
  // console.log(user);
  // const newBody = JSON.stringify(user);
  //  console.log(newBody);
  // return fetch('/api/users', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json'
  //   },
  //   body: user
  // })
  // .then((response) => {
  //   if (response.status >= 400) {
  //     throw new Error('Bad response from server');
  //   }
  //   return response.json();
  // })
  // .then(user => user)
  // .catch((error) => {
  //   throw error;
  // });
};


  // .then((savedUser) => {

  //   console.log('YOU WANT TO SAVE');
  //   dispatch(createUserSuccess(savedUser));
  // }).catch((error) => {
  //   throw (error);
  // });
export const saveUser = (userJson) => {
  return dispatch => {
     userSaver(userJson);
      // .then((savedUser) => {
      //   dispatch(createUserSuccess(savedUser));
      // }).catch((error) => {
      //   throw (error);
      // })
  }
}
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

