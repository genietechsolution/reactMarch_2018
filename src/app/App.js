import React, { Component } from 'react';
import './App.css';
import Parent from './parent/Parent';
import Child from './child/Child';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent/>
      </div>
    );
  }
}

export default App;
