import { SORT, CANCEL_SORT } from '../constants/actionTypes';

const initState = {
  type: 'none',
  dir: 1,
};

export default function sort(state = initState, action) {
  if (action.type === SORT) {
    return {
      type: action.sort.type,
      dir: -state.dir,
    };
  } else if (action.type === CANCEL_SORT) {
    return { ...initState };
  } else;
  return { ...state };
}
