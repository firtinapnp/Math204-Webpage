import {FETCH_HOMEWORKS} from "../actions";

export default function homeworks(state=[],action){
    switch(action.type){
        case FETCH_HOMEWORKS:
            return action.payload.data ? action.payload.data : state;
        default:
            return state;
    }
}
