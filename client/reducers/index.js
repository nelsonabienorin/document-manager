import { combineReducers } from 'redux';
import documents from './documentReducer';
import roles from './roleReducer';
import users from './userReducer';

const rootReducer = combineReducers({
  roles,
  users,
  documents
});
export default rootReducer;
