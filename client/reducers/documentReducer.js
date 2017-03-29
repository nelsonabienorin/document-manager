import * as types from '../actions/actionTypes';
import initialState from './initialState';

const documentsReducer = (state = initialState.documents, action) => {
  switch (action.type) {
    default: {
      console.log('document reducer called');
      return state;
    }
  }
};

export default documentsReducer;
