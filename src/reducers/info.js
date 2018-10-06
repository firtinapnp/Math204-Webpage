import {FETCH_INFO} from "../actions";

export default function info(state=[],action){
    switch(action.type){
        case FETCH_INFO:
            return action.payload.data ? action.payload.data : state;
        default:
            return state;
    }
}
