import * as Actions from "./Actions";
import { SESSION, BREAK } from "./Values";

const SESSION_LENGTH_DEFAULT = 25
const BREAK_LENGTH_DEFAULT = 5

const defaultState = {
    break_length: BREAK_LENGTH_DEFAULT,
    session_length: SESSION_LENGTH_DEFAULT,
    clock_running: false,
    time: SESSION_LENGTH_DEFAULT * 60 * 1000,
    label: SESSION,
    timerId: 0,
}

export function rootReducer(state = defaultState, action){
    switch(action.type){ 
        case Actions.DECREMENT_BREAK_LENGTH : {
            return Object.assign({}, state, { 
                break_length: state.break_length-1 
            })    
        }
        case Actions.INCREMENT_BREAK_LENGTH : {
            return Object.assign({}, state, { 
                break_length: state.break_length+1  
            })           
        }
        case Actions.DECREMENT_SESSION_LENGTH : {
            return Object.assign({}, state, { 
                session_length: state.session_length-1 
            })  
        }
        case Actions.INCREMENT_SESSION_LENGTH : {
            return Object.assign({}, state, { 
                session_length: state.session_length+1,            
            })
                     
        }
        case Actions.RESET : {
            return defaultState
        }
        case Actions.START_CLOCK : {
            return Object.assign({}, state, { 
                clock_running : true,
                timerId: action.timerId,
            })
        }
        case Actions.STOP_CLOCK : {
            return Object.assign({}, state, { 
                clock_running : false,
            })
        }
        case Actions.UPDATE_CURRENT_TIME : {
            return Object.assign({}, state, { 
                time: action.time,
            })
        }
        case Actions.UPDATE_LABEL: {
            return Object.assign({}, state, { 
                label : action.label,
            })
        }
        case Actions.SESSION_TIMEOUT: {
            return Object.assign({}, state, { 
                label : BREAK,
                time: state.break_length * 60 * 1000,
            })
        }
        case Actions.BREAK_TIMEOUT: {
            return Object.assign({}, state, { 
                label : SESSION,
                time: state.session_length * 60 * 1000,
            })
        }
        default :{
            return state
        }
    }
}