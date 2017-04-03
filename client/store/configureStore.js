import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
// const configureStore = (initialState) => {
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(thunk)
//   );
// };

// export default configureStore();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (initialState) => {
  return createStore(
      rootReducer,
      initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())));
};

export default configureStore();
