import React from 'react';
import { Provider } from 'react-redux';
import ClassComponent from './ClassComponent/container';
import FunctionalComponent from './FunctionalComponent';
import store from '../context/store';

const Wrapper = () => (
  <Provider store={store}>
    <ClassComponent />
    <FunctionalComponent />
  </Provider>
);

export default Wrapper;
