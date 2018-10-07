import { combineReducers } from 'redux';
import homeworks from "./homeworks";
import collapsible from "./collapsible";
import info from "./info";
import exams from "./exams";


const rootReducer = combineReducers({
  homeworks,info,exams,collapsible
});

export default rootReducer;
