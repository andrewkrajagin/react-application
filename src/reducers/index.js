import { combineReducers } from 'redux';
import employees from './employees';
import filter from './filter';
import sort from './sort';
import checkedKeys from './checkedKeys';
import find from './find';
import formState from './formState';
import dateTime from './dateTime';

export default combineReducers({
  employees,
  props: combineReducers({
    filter,
    sort,
    checkedKeys,
    find,
  }),
  formState,
  dateTime,
});
