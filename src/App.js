import React, { Component } from 'react';
import './App.css';

// The root component of the react application
class App extends Component {
  
  // This method is called by React to render something to screen
  render() {
    return (

      // This is JSX not HTML
      <div className="App">
        <h1>Hi, I am a react app</h1>
      </div>
    );
  }
}

export default App;
