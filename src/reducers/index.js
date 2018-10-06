import { combineReducers } from 'redux';
import homeworks from "./homeworks";
import info from "./info";
import exams from "./exams";


const rootReducer = combineReducers({
  homeworks,info,exams
});

export default rootReducer;
