import {
  OPEN_ADD,
  OPEN_REDACT,
  CHANGE_OBJ,
  CANCEL_FORM,
} from '../constants/actionTypes';

const initState = {
  obj: {
    id: 0,
    name: '',
    isArchive: false,
    role: 'cook',
    phone: '',
    birthday: '',
  },
  head: '',
};

export default function formState(state = initState, action) {
  let { obj, head } = state;
  if (action.type === OPEN_ADD) {
    // obj = { ...initState.obj };
    obj.id = action.id;
    head = action.head;
    /* return {
      obj: { ...obj },
      head: action.head,
    }; */
    // state.obj = { ...initState.obj };
    // state.obj.id = action.id;
    // state.head = action.head;
  } else if (action.type === OPEN_REDACT) {
    obj = { ...action.obj };
    head = action.head;
    /* return {
      obj: { ...action.obj },
      head: action.head,
    }; */
    // state.obj = { ...action.obj };
    // state.head = action.head;
  } else if (action.type === CHANGE_OBJ) {
    obj = { ...state.obj };
    obj[action.key] = action.value;
    /* return {
      obj: { ...obj },
      head: state.head,
    }; */
  } else if (action.type === CANCEL_FORM) {
    obj = { ...initState.obj };
  } else;
  return { obj, head };
}
