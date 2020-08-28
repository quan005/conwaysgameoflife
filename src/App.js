import React from 'react';
import './App.css';

import Body from './Components/Body.js'
import Footer from './Components/Footer.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      generation: 0
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Conway's Game Of Life</h1>
        </header>
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;