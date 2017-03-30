import * as types from '../actions/actionTypes';
import initialState from './initialState';

const documentsReducer = (state = initialState.documents, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default documentsReducer;
