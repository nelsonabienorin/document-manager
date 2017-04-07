import request from 'superagent';
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

export const deleteDocumentSuccess = document => ({
  type: types.DELETE_DOCUMENT_SUCCESS,
  document
});


// thunk
export const fetchDocuments = (offset) => {
  const pageOffset = offset || 0;
  const token = localStorage.getItem('dms-user');
  return (dispatch) => {
    request
    .get(`/api/documents?offset=${pageOffset}`)
    .set({ 'x-access-token': token })
    .end((err, res) => {
      Materialize.toast(res.body.message, 4000, 'rounded');
      dispatch(getDocumentSuccess(res.body));
    });
  };
};

export const documentSaver = (document) => {
  const token = localStorage.getItem('dms-user');
  return (dispatch) => {
    request
    .post('/api/documents')
    .send(document)
    .set({ 'x-access-token': token })
    .end((err, res) => {
      Materialize.toast(res.body.message, 4000, 'rounded');
      if (err) {
        return err;
      }
      dispatch(createDocumentSuccess(res.body.document));
      window.location = '/documents';
    });
  };
};


export const updateDocument = (document) => {
  const token = localStorage.getItem('dms-user');
  return (dispatch) => {
    request
    .put(`/api/documents/${document.id}`)
    .send(document)
    .set({ 'x-access-token': token })
    .end((err, res) => {
      Materialize.toast(res.body.message, 4000, 'rounded');
      if (err) {
        return err;
      }
      window.location = '/documents';
      dispatch(updateDocumentSuccess(res.body.updatedDocument));
    });
  };
};



export const deleteDocument = (id) => {
  const token = localStorage.getItem('dms-user');
  return (dispatch) => {
    request
    .delete(`/api/documents/${id}`)
    .send(document)
    .set({ 'x-access-token': token })
    .end((err, res) => {
      Materialize.toast(res.body.message, 4000, 'rounded');
      if (err) {
        return err;
      }
      dispatch(deleteDocumentSuccess(res.body.document));
      window.location = '/documents';
    });
  };
};
