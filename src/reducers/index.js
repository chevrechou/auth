import { combineReducers } from 'redux';
import auth from './authReducer';
import scheduleReducer from './scheduleReducer';

export const initState = {
  name: "",
  signedIn: false,
  schedule:[
    {
      event:"jim",
      date:"09-09-2021"
    },
    {
      event:"jjjijihgyufm",
      date:"09-09-2021"
    }
  ],
}
export default combineReducers({
  auth,
  scheduleReducer
});