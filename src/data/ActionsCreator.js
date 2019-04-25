import * as Actions from "./Actions"
import { SESSION, BREAK } from "./Values";

export function incrementBreakLength(){   
    return {
        type: Actions.INCREMENT_BREAK_LENGTH
    }
}

export function decrementBreakLength(){
    return {
        type: Actions.DECREMENT_BREAK_LENGTH
    }
}


export function incrementSessionLength(){
    return {
        type: Actions.INCREMENT_SESSION_LENGTH
    }
}

export function decrementSessionLength(){
    return {
        type: Actions.DECREMENT_SESSION_LENGTH
    }
}


export function reset(){   
    return {
        type: Actions.RESET
    }
}


export function startCLock(timerId){   
    return {
        type: Actions.START_CLOCK,
        timerId
    }
}


export function stopClock(){   
    return {
        type: Actions.STOP_CLOCK
    }
}

export function updateCurrentTime(currentTime) {   
    return {
        type: Actions.UPDATE_CURRENT_TIME,
        time: currentTime
    }
}


export function setSesionLabel() {   
    return {
        type: Actions.UPDATE_LABEL,
        label: SESSION
    }
}


export function setBreakLabel() {   
    return {
        type: Actions.UPDATE_LABEL,
        label: BREAK
    }
}


export function sessionTimeout() {   
    return {
        type: Actions.SESSION_TIMEOUT
    }
}


export function breakTimeout() {   
    return {
        type: Actions.BREAK_TIMEOUT
    }
}



