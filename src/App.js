import React, { Component } from 'react';
import './App.css';
import Break from './components/Break/Break';
import Session from './components/Session/Session';
import Timer from './components/Timer/Timer';
import Controls from './components/Controls/Controls';

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  timerLabel: 'session',
  timeLeft: {
    minutes: 25,
    seconds: 0,
  },
  timerRunning: false
}
let timer;
class App extends Component {

  constructor(props) {
    super(props)
    this.state = initialState;
  }

  incrementBreak = () => {
    !this.state.timerRunning ? this.setState({ breakLength: this.state.breakLength === 60 ? this.state.breakLength : this.state.breakLength + 1 }) : null
  }
  decrementBreak = () => {
    !this.state.timerRunning ?
      this.setState({
        breakLength: this.state.breakLength > 1 ? this.state.breakLength - 1 : 1
      }) : null
  }
  incrementSession = () => {
    !this.state.timerRunning ? this.setState({ sessionLength: this.state.sessionLength === 60 ? this.state.sessionLength : this.state.sessionLength + 1 }, function () {
      this.setState({ timeLeft: { minutes: this.state.sessionLength, seconds: 0 } })
    }) : null
  }
  decrementSession = () => {
    !this.state.timerRunning ?
      this.setState({
        sessionLength: this.state.sessionLength > 1 ? this.state.sessionLength - 1 : 1
      }, function () {
        this.setState({ timeLeft: { minutes: this.state.sessionLength, seconds: 0 } })
      }) : null
  }

  reset = () => {
    this.refs.audio_tag.pause();
    this.refs.audio_tag.currentTime = 0
    clearInterval(timer);
    timer = null;
    this.setState(initialState)
  }

  startstop = () => {
    this.setState({
      timerRunning: !this.state.timerRunning
    }, function () {

      if (this.state.timerRunning) {

        timer = setInterval(() => {
          if (this.state.timeLeft.minutes === 0 && this.state.timeLeft.seconds === 0) {
            this.refs.audio_tag.play();
            this.setState({
              timeLeft: {
                minutes: this.state.timerLabel === 'break' ? this.state.sessionLength : this.state.breakLength,
                seconds: 0
              },
              timerLabel: this.state.timerLabel === 'break' ? 'session' : 'break'
            })
          } else {
            this.state.timeLeft.seconds === 0
              ? this.setState({
                timeLeft: {
                  minutes: this.state.timeLeft.minutes - 1,
                  seconds: 59
                }
              })

              : this.setState({
                timeLeft: {
                  minutes: this.state.timeLeft.minutes,
                  seconds: this.state.timeLeft.seconds - 1,
                }
              })
          }

        }, 1000)
      } else {
        clearInterval(timer);
        timer = null;
      }
    })
  }



  render() {
    return (
      <div className="App">
        <h1 style={{ color: '#2F4858' }}>Pomodoro Clock</h1>
        <Timer
          timeLeft={this.state.timeLeft}
          timerLabel={this.state.timerLabel}
        />
        <Controls
          startstop={this.startstop}
          reset={this.reset}
        />
        <Break
          incrementBreak={this.incrementBreak}
          decrementBreak={this.decrementBreak}
          breakLength={this.state.breakLength} />
        <Session
          incrementSession={this.incrementSession}
          decrementSession={this.decrementSession}
          sessionLength={this.state.sessionLength} />

        <audio id="beep" ref="audio_tag" src="http://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3" style={{ display: 'none' }} />
        <p style={{ color: '#2F4858' }}>Designed and Coded by Praveen Saraogi </p>
      </div>
    );
  }
}

export default App;
