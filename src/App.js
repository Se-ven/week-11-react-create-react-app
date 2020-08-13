import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {
  // 'constructor' is part of 'class' and React components
  // always called when an instance of our class is created
  // or CONSTRUCTED
  constructor(props) {
    super(props)
    // bad code: this.state.displayTime = ''

    // must set state to an object!!
    this.state = {
      displayTime: '',
      visitorName: 'Anonymous User'
    }
  }

  // 'componentDidMount is standard in 
  // React where we load or initialize data
  componentDidMount() {
    this.timerId = setInterval(() => {
      // call the 'tick'
      this.tick()
    }, 1000);
  }

  // custom method as seen on reactjs.org
  tick() {
    console.log("In tick")
    // setState method that updates the DATA
    this.setState({
      displayTime: new Date().toString()
    })
  }

  // 'render is the standard for getting
  // html into our web page 
  render() {
    const { displayTime, visitorName } = this.state;


    return (
      <div className="clock">
        <h2>Your local time is {displayTime} </h2>
        <div>Thanks for visiting {visitorName}!</div>
      </div>)
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Clock />
    </div>
  )
}

export default App;
