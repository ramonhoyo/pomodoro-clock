import React, { Component } from "react";
import moment from "moment";
class ClockViewer extends Component{
    render(){
        let style = { margin: 0}
        if(this.props.time < 30*1000){
            style = timerLabelStyle
        }
        return(
            
            <div style={containerStyle}>
                <h2 id="timer-label" style={{margin: 0}}>{this.props.label}</h2>
                <h1 id="time-left" style={style}>{this.parseTime(this.props.time)}</h1>
            </div>
        )
    }

    parseTime(time){
       return moment(time).format("mm:ss")
    }
}

const containerStyle = {
    borderStyle : "solid",
    borderRadius: 10,
    borderWidht: 1,
    borderColor :"#fff",
    width: "60%",
    height: 80,
    display: "inline-block"
}

const timerLabelStyle = {
    animationName: "clockTimeAnimation",
    animationDuration: "1s",
    animationIterationCount: "infinite",
    margin: 0
} 


export default ClockViewer