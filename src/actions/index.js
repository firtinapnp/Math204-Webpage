import axios from "axios";

export const FETCH_HOMEWORKS = "FETCH_HOMEWORKS";
export const OPEN_COLLAPSIBLE = "OPEN_COLLAPSIBLE";
export const CLOSE_COLLAPSIBLE = "CLOSE_COLLAPSIBLE";
export const FETCH_INFO = "FETCH_INFO";
export const FETCH_EXAMS = "FETCH_EXAMS";


const INFO_URL = `${process.env.PUBLIC_URL}/info.json`;
const HW_URL = `${process.env.PUBLIC_URL}/homeworks.json`;
const EXAMS_URL = `${process.env.PUBLIC_URL}/exams.json`;


export function fetchInfo(){
    const request = axios.get(INFO_URL);
    return dispatch => {
        request.then(data => {
            dispatch({
                type: FETCH_INFO,
                payload: data
            });
        });
    }
}
export function fetchHomeworks(){
    const request = axios.get(HW_URL);
    return dispatch => {
        request.then(data => {
            dispatch({
                type: FETCH_HOMEWORKS,
                payload: data
            });
        });
    }
}
export function fetchExams(){
    const request = axios.get(EXAMS_URL);
    return dispatch => {
        request.then(data => {
            dispatch({
                type: FETCH_EXAMS,
                payload: data
            });
        });
    }
}
export function openCollapsible(elID,elType){
    return dispatch => {
        dispatch({
            type: OPEN_COLLAPSIBLE,
            payload: {elID,elType}
        });
    }
}
export function closeCollapsible(elID,elType){
    return dispatch => {
        dispatch({
            type: CLOSE_COLLAPSIBLE,
            payload: {elID,elType}
        });
    }
}
