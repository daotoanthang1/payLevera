import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

import combinedReducer from './reducers';

const reducer = (state, action) => {
  if (action.type == HYDRATE && !state.auth.init) {
    state = { ...action.payload }
    state.auth = { ...state.auth, init: true }
    return state
  }
  return combinedReducer(state, action)
}

const makeStore = () =>
  createStore(
    reducer,
    compose(
      applyMiddleware(thunkMiddleware),
      typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
  );

export default createWrapper(makeStore);