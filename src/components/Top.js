import React , { Component } from "react"
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { SESSION, BREAK } from "../data/Values";
class Top extends Component {
    constructor(props){
        super(props)
        this.handleUpBreakLength = this.handleUpBreakLength.bind(this)
        this.handleDownBreakLength = this.handleDownBreakLength.bind(this)
        this.handleUpSessionLength = this.handleUpSessionLength.bind(this)
        this.handleDownSessionLength = this.handleDownSessionLength.bind(this)
    }

    handleUpBreakLength(){
        if((this.props.clock_running && this.props.label === BREAK) || this.props.break_length > 59){
            return
        }
        this.props.incrementBreakLength()
    }
    handleDownBreakLength(){
        if((this.props.clock_running && this.props.label === BREAK) || this.props.break_length === 1){
            return
        }
        this.props.decrementBreakLength()
    }

    handleUpSessionLength(){
        if((this.props.clock_running && this.props.label === SESSION) || this.props.session_length > 59){
            return
        }
        if(this.props.label === SESSION){
            this.props.updateCurrentTime((this.props.session_length+1)*60*1000)
        }
        this.props.incrementSessionLength()

    }
    handleDownSessionLength(){
        if((this.props.clock_running && this.props.label === SESSION) || this.props.session_length === 1){
            return
        }
        if(this.props.label === SESSION){
            this.props.updateCurrentTime((this.props.session_length-1)*60*1000)
        }
        this.props.decrementSessionLength()
    }

    render(){
        return(
            <div style={containerDivStyle}>
                <div style={childDiv}>
                    <h3  id="break-label" style={h3Style}>
                        Break Length
                    </h3>
                    <IconButton  id="break-increment" style={btnStyle} onClick={this.handleUpBreakLength}>
                        <KeyboardArrowUp/>
                    </IconButton>   
                    <h3 id="break-length" style={h3BlockStyle}>
                        {this.props.break_length}
                    </h3>
                    <IconButton  id="break-decrement" style={btnStyle}  onClick={this.handleDownBreakLength}>
                        <KeyboardArrowDown/>
                    </IconButton>
                </div>
                <div style={childDiv}>
                    <h3 id="session-label" style={h3Style}>
                        Session Length
                    </h3>
                    <IconButton id="session-increment" style={btnStyle} onClick={this.handleUpSessionLength}>
                        <KeyboardArrowUp/>
                    </IconButton>   
                    <h3 id="session-length" style={h3BlockStyle}>
                        {this.props.session_length}
                    </h3>
                    <IconButton id="session-decrement" style={btnStyle} onClick={this.handleDownSessionLength}>
                        <KeyboardArrowDown/>
                    </IconButton>
                </div>
            </div>
        )
    }
}

const containerDivStyle = {
    textAlign: "-webkit-center",
    display: "flex",
}

const childDiv = {
    display: "inline-block",
    width: "50%",
    height: "min-content",
}

const h3Style={
    borderRadius: 10,
    borderColor: "rgb(255, 255, 255)",
    borderWidth: 1,
    borderStyle: "solid",
    width: "90%",
    margin: 0,
}

const h3BlockStyle={
    margin: 0,
    display: "inline-block",
    widht: "33%",
}

const btnStyle={
        margin: 0,
    display: "inline-block",
    widht: "33%",
}

export default Top