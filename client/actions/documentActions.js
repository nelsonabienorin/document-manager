import request from 'superagent';
import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';



export const createDocument = document => ({
  type: types.CREATE_DOCUMENT,
  document
});

// action creators
export const getDocumentSuccess = documents => ({
  type: types.LOAD_DOCUMENT_SUCCESS,
  documents
});

export const updateDocumentSuccess = document => ({
  type: types.UPDATE_DOCUMENT_SUCCESS,
  document
});

export const createDocumentSuccess = document => ({
  type: types.CREATE_DOCUMENT_SUCCESS,
  document
});
// get roles
export const documentApi = () => {
  const token  = localStorage.getItem('dms-user');
  return fetch('/api/documents', {
    method: 'GET',
    headers: {
      'x-access-token': token
    }
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  })
    .then(documents => documents)
    .catch((error) => {
      throw error;
    });
};

export const fetchADocument = (documentId) => {
  const token = localStorage.getItem('dms-user');
  return fetch(`/api/roles/${documentId}`, {
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
    .then(document => document)
    .catch((error) => {
      throw error;
    });
};

// thunk
export const fetchDocuments = () => dispatch => documentApi()
      .then((documents) => {
        dispatch(getDocumentSuccess(documents));
      })
      .catch((error) => { throw error; });


export const documentSaver = (document) => {
  const token = localStorage.getItem('dms-user');
  return (dispatch) => {
    request
  .post('/api/documents')
  .send(document)
  .set({ 'x-access-token': token })
  .end((err, res) => {
    if (err) {
      return console.log('Error :', err);
    }
    dispatch(createDocumentSuccess(res.body.document));
    window.location = '/';
    // dispatch(createUserSuccess(createdUser));
  });
  };
};
