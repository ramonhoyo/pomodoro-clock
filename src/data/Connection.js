
import * as ActionsCreator from "./ActionsCreator"

export const mapStateToProps = (state) => {
    return {
      break_length: state.break_length,
      session_length: state.session_length,
      clock_running: state.clock_running,
      time: state.time,
      label: state.label,
      timerId: state.timerId,
    }
  }
  
export const mapDispatchToProps = (dispatch) => {
    return {
      incrementBreakLength : ()  => {
        dispatch(ActionsCreator.incrementBreakLength())
      },
      decrementBreakLength :()  => {
        dispatch(ActionsCreator.decrementBreakLength())
      },
  
      incrementSessionLength :()  => {
        dispatch(ActionsCreator.incrementSessionLength())
      },
      
      decrementSessionLength :()  => {
        dispatch(ActionsCreator.decrementSessionLength())
      },
      
      reset :()  => {
        dispatch(ActionsCreator.reset())
      },
      
      startClock :(timerId)  => {
        dispatch(ActionsCreator.startCLock(timerId))
      },
  
      stopClock : ()  => {
        dispatch(ActionsCreator.stopClock())
      },

      updateCurrentTime :(currentTime)  => {
        dispatch(ActionsCreator.updateCurrentTime(currentTime))
      },

      setSessionLabel :()  => {
        dispatch(ActionsCreator.setSesionLabel())
      },

      setBreakLabel :()  => {
        dispatch(ActionsCreator.setBreakLabel())
      },
      
      sessionTimeout :()  => {
        dispatch(ActionsCreator.sessionTimeout())
      },

      breakTimeout :()  => {
        dispatch(ActionsCreator.breakTimeout())
      },
    }
  }
  