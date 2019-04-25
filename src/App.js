import React, { Component } from 'react';
import './App.css';
import Top from "./components/Top"
import Menu from "./components/Menu"
import ClockViewer from './components/ClockViewer';

class App extends Component {
  render() {
    return (
        <div className="App">
          Made with <span style={{color: "#e25555"}}>&hearts;</span> by Andress Hoyo
          <h1>Pomodoro Clock</h1>
          <Top 
            incrementBreakLength={this.props.incrementBreakLength}
            decrementBreakLength={this.props.decrementBreakLength}  
            incrementSessionLength={this.props.incrementSessionLength}
            decrementSessionLength={this.props.decrementSessionLength}
            label={this.props.label}
            break_length={this.props.break_length}
            session_length={this.props.session_length}
            clock_running={this.props.clock_running}
            updateCurrentTime={this.props.updateCurrentTime}
          />
          <ClockViewer 
            time={this.props.time}
            label={this.props.label}
          />
          <Menu 
            clock_running={this.props.clock_running}
            startClock = {this.props.startClock}
            stopClock = {this.props.stopClock}  
            reset = {this.props.reset}
            time = {this.props.time}
            updateCurrentTime = {this.props.updateCurrentTime}
            sessionTimeout = {this.props.sessionTimeout}
            label = {this.props.label}
            breakTimeout = {this.props.breakTimeout}
            timerId = {this.props.timerId}
          />
        </div>
    );
  }
}

export default App;
