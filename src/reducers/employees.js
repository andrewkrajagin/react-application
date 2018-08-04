import employees from '../employees.json';
import { SUCCESS_FORM } from '../constants/actionTypes';

export default function data(state = employees, action) {
  if (action.type === SUCCESS_FORM) {
    let st = [...state];
    st[action.obj.id - 1] = { ...action.obj };
    return [...st];
  }
  return [...state];
}
