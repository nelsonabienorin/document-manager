import * as types from '../actions/actionTypes';
import initialState from './initialState';

const documentsReducer = (state = initialState.documents, action) => {
  console.log(state, "THis is my state in the reducer");
  switch (action.type) {
    case types.CREATE_DOCUMENT:
      return [...state, Object.assign({}, action.documents)];
    case types.LOAD_DOCUMENT_SUCCESS:
      return action.documents;
    case types.CREATE_DOCUMENT_SUCCESS:
      return [...state, Object.assign({}, action.document)];
    case types.UPDATE_DOCUMENT_SUCCESS:
    console.log(document, "document in reducer");
    console.log(document.id , "document.id in reducer");
    console.log(action.document.id , "action.document.id in reducer");
      return [...state.filter(document => document.id !== action.document.id),
        Object.assign({}, action.document)];
    default:
      return state;
  }
};

export default documentsReducer;
