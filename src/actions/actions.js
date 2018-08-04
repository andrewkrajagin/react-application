
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

export function filter(type, value) {
  return {
    type: FILTER,
    filter: { type, value },
  };
}
export function cancelFilter() {
  return {
    type: CANCEL_FILTER,
  };
}
export function sort(type) {
  return {
    type: SORT,
    sort: { type },
  };
}
export function cancelSort() {
  return {
    type: CANCEL_SORT,
  };
}
export function find(value) {
  return {
    type: FIND,
    value,
  };
}
export function check(checkedKeys) {
  return {
    type: CHECK,
    checkedKeys,
  };
}
export function openAddForm(id) {
  return {
    type: OPEN_ADD,
    head: HEAD_ADD,
    id,
  };
}
export function openRedactForm(obj) {
  return {
    type: OPEN_REDACT,
    obj,
    head: HEAD_REDACT,
  };
}
export function changeObj(key, value) {
  return {
    type: CHANGE_OBJ,
    key,
    value,
  };
}
export function successForm(obj) {
  return {
    type: SUCCESS_FORM,
    obj,
  };
}
export function cancelForm() {
  return {
    type: CANCEL_FORM,
  };
}
