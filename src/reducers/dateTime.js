import { TICK } from '../constants/actionTypes';

export default function dateTime(state = new Date().toLocaleTimeString(), action) {
  if (action.type === TICK) {
    console.log('tick');
    return new Date().toLocaleTimeString();
  };
  return state;
};
