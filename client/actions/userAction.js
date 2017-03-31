import request from 'superagent';
import * as types from './actionTypes';


export const createUser = user => ({
  type: types.CREATE_USER,
  user
});


export const getUserSuccess = (users) => ({
    type: types.USER_SUCCESS,
    users
  });

export const createUserSuccess = user => ({
  type: types.CREATE_USER_SUCCESS,
  user
});

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

export const fetchUsers = () => {
  console.log('I got to fetchUser in act');
  const token = localStorage.getItem('dms-user');
  return (dispatch) => {
  request
  .get('/api/users')
  .set({ 'x-access-token': token })
  .end((err, res) => {
    console.log(res.body, 'my response');
    dispatch(getUserSuccess(res.body.users));
  });
};
};

// return dispatch(getUserSuccess(users));
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


// // thunk
// export const roleSaver = (role) => {
//   return (dispatch) => {
//   const token = localStorage.getItem('dms-user');
//   request
//   .post('/api/roles')
//   .send(role)
//   .set({ 'x-access-token': token })
//   .end((err, res) => {
//     console.log(res.body, 'my response');
//     dispatch(createRoleSuccess(role))
//     window.location = '/';
//   });
//   };
// };

