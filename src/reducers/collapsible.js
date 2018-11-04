import {OPEN_COLLAPSIBLE,CLOSE_COLLAPSIBLE} from "../actions";

export default function collapsible(state={},action){
    switch(action.type){
        case OPEN_COLLAPSIBLE:
            if(action.payload){
                if(action.payload.elType === "exam"){
                    return {...state, done:true, activeExam:action.payload.elID};
                }else if(action.payload.elType === "oldexam"){
                    return {...state, done:true, activeOldExam:action.payload.elID} ;
                }else if(action.payload.elType === "homework"){
                    return {...state, done:true, activeHW:action.payload.elID} ;
                }
            }else{
                return state;
            }
            break;
        case CLOSE_COLLAPSIBLE:
            if(action.payload){
                if(action.payload.elType === "exam"){
                    return {...state, done:true, activeExam:""};
                }else if(action.payload.elType === "oldexam"){
                    return {...state, done:true, activeOldExam:""} ;
                }else if(action.payload.elType === "homework"){
                    return {...state, done:true, activeHW:""} ;
                }
            }else{
                return state;
            }
            break;
        default:
            return state;
    }
}
