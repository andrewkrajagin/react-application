import employees from '../employees.json';
import { CHECK } from '../constants/actionTypes';

const initState = [...employees.map(obj => obj.id.toString())];

export default function checkedKeys(state = initState, action) {
  if (action.type === CHECK) {
    return [...action.checkedKeys];
  }
  return [...state];
}
