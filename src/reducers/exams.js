import {FETCH_EXAMS} from "../actions";

export default function exams(state=[],action){
    switch(action.type){
        case FETCH_EXAMS:
        	console.log(action.payload);
            return action.payload.data ? action.payload.data : state;
        default:
            return state;
    }
}
