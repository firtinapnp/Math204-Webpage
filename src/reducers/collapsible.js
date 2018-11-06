import {OPEN_COLLAPSIBLE,CLOSE_COLLAPSIBLE} from "../actions";

export default function collapsible(state={examDone:false,hwDone:false,oldExamDone:false,activeHW:"",activeExam:"",activeOldExam:""},action){
    switch(action.type){
        case OPEN_COLLAPSIBLE:
            if(action.payload){
                if(action.payload.elType === "exam"){
                    return {...state, examDone:true, activeExam:action.payload.elID};
                }else if(action.payload.elType === "oldexam"){
                    return {...state, oldExamDone:true, activeOldExam:action.payload.elID} ;
                }else if(action.payload.elType === "homework"){
                    return {...state, hwDone:true, activeHW:action.payload.elID} ;
                }
            }else{
                return state;
            }
            break;
        case CLOSE_COLLAPSIBLE:
            if(action.payload){
                if(action.payload.elType === "exam"){
                    return {...state, examDone:true, activeExam:""};
                }else if(action.payload.elType === "oldexam"){
                    return {...state, oldExamDone:true, activeOldExam:""} ;
                }else if(action.payload.elType === "homework"){
                    return {...state, hwDone:true, activeHW:""} ;
                }
            }else{
                return state;
            }
            break;
        default:
            return state;
    }
}
