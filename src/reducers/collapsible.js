import {OPEN_COLLAPSIBLE,CLOSE_COLLAPSIBLE} from "../actions";

export default function collapsible(state={},action){
    switch(action.type){
        case OPEN_COLLAPSIBLE:
            return action.payload ? {done:true, activeHW:action.payload} : state;
        case CLOSE_COLLAPSIBLE:
            return {done:true, activeHW:""};
        default:
            return state;
    }
}
