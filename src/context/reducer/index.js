import { combineReducers } from 'redux';

const DEFAULT_STATE = {
  value: 0,
};

const INITIAL_STATE = JSON.parse(JSON.stringify(DEFAULT_STATE));

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

const counter = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREASE:
      return Object.assign({}, state, { value: state.value + action.payload });
    case DECREASE:
      return Object.assign({}, state, { value: state.value - action.payload });
    default:
      return state;
  }
}

export default combineReducers({
  counter,
});
