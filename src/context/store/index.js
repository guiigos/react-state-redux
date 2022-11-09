import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducer';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = ({ dispatch, getState }) => (next) => (action) => next(action);

export default applyMiddleware(middleware)(createStore)(reducers, devTools);
