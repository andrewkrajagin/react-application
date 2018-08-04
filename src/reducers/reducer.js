import employees from '../employees.json';
import {
  FILTER,
  CANCEL_FILTER,
  SORT,
  CANCEL_SORT,
  FIND,
  CHECK,
  OPEN_ADD,
  HEAD_ADD,
  OPEN_REDACT,
  HEAD_REDACT,
  CHANGE_OBJ,
  SUCCESS_FORM,
  CANCEL_FORM,
} from '../constants/actionTypes';

const initState = {
  data: [...employees],
  props: {
    filter: {
      role: '',
      isArchive: '',
    },
    sort: {
      type: 'none',
      dir: 1,
    },
    checkedKeys: [...employees.map(obj => obj.id.toString())],
    find: '',
  },
  formState: {
    obj: {
      id: 0,
      name: '',
      isArchive: false,
      role: 'cook',
      phone: '',
      birthday: '',
    },
    head: '',
  },
};

export default function reducer(state = initState, action) {
  if (action.type === SORT) {
    state.props.sort.type = action.sort.type;
    state.props.sort.dir *= -1;
  } else if (action.type === CANCEL_SORT) {
    state.props.sort.type = 'none';
    state.props.sort.dir = 1;
  } else if (action.type === FILTER) {
    state.props.filter[action.filter.type] = action.filter.value;
  } else if (action.type === CANCEL_FILTER) {
    state.props.filter.role = '';
    state.props.filter.isArchive = '';
  } else if (action.type === FIND) {
    state.props.find = action.value;
  } else if (action.type === CHECK) {
    state.props.checkedKeys = action.checkedKeys;
  } else if (action.type === OPEN_ADD) {
    state.formState.obj = { ...initState.formState.obj };
    state.formState.obj.id = state.data.length + 1;
    state.formState.head = HEAD_ADD;
  } else if (action.type === OPEN_REDACT) {
    state.formState.obj = { ...action.obj };
    state.formState.head = HEAD_REDACT;
  } else if (action.type === CHANGE_OBJ) {
    state.formState.obj[action.key] = action.value;
  } else if (action.type === SUCCESS_FORM) {
    state.data[state.formState.obj.id - 1] = { ...state.formState.obj };
  } else if (action.type === CANCEL_FORM) {
    state.formState.obj = { ...initState.formState.obj };
  } else;
  return {
    data: [...state.data],
    props: {
      filter: { ...state.props.filter },
      sort: { ...state.props.sort },
      checkedKeys: [...state.props.checkedKeys],
      find: state.props.find,
    },
    formState: {
      obj: { ...state.formState.obj },
      head: state.formState.head,
    },
  };
}
