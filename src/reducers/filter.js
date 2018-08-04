import { FILTER, CANCEL_FILTER } from '../constants/actionTypes';

const initState = {
  role: '',
  isArchive: '',
};

export default function filter(state = initState, action) {
  if (action.type === FILTER) {
    const st = { ...state };
    st[action.filter.type] = action.filter.value;
    return { ...st };
  } else if (action.type === CANCEL_FILTER) {
    return { ...initState };
  } else;
  return { ...state };
}
