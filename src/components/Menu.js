import React , { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import { PlayArrow, Replay, Pause } from "@material-ui/icons";
import { SESSION } from "../data/Values";

class Menu extends Component {
    constructor(props){
        super(props)
        this.handleResetCLick = this.handleResetCLick.bind(this)
        this.handleStartStopCLick = this.handleStartStopCLick.bind(this)
    }
    
    handleResetCLick(){
        this.props.stopClock(this.props.timerId)
        let aud = document.getElementById("beep")
        aud.load()
        clearInterval(this.props.timerId)
        this.props.reset()
    }

    verifyTime(){
        if(this.props.time <= 0){
            let aud = document.getElementById("beep")
            aud.play()
            if(this.props.label === SESSION){
                this.props.sessionTimeout()
            } else {
                this.props.breakTimeout()
            }
            return false
        }
        return true
    }

    handleStartStopCLick(){
        clearInterval(this.props.timerId)
        if(this.props.clock_running) {
            this.props.stopClock(this.props.timerId)
        } else {
            let id =  setInterval( () => {
                if(!this.verifyTime()){
                    return
                }
                this.props.updateCurrentTime(this.props.time-1000)
            }, 1000)
            this.props.startClock(id)
        }
    }



    render(){
        let button = this.props.clock_running?  <Pause/> :  <PlayArrow/>
        return (
            <div>
                <IconButton id="start_stop" onClick={this.handleStartStopCLick}> 
                    {button}
                </IconButton>
                <IconButton  id="reset" onClick={this.handleResetCLick}>
                    <Replay/>
                </IconButton>
                <audio id="beep" preload="auto" src="https://goo.gl/65cBl1"></audio>
            </div>
            
            
        )
    }
}

export default Menu;