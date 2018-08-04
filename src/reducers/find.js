import { FIND } from '../constants/actionTypes';

const initState = '';

export default function find(state = initState, action) {
  if (action.type === FIND) {
    return action.value;
  }
  return state;
}
