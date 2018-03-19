import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlazingComp from './components/BlazingComp';


class App extends Component {

  changeText = () => {
    console.log('Text changed');
  }
 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <BlazingComp></BlazingComp>
          <input type="text" onInput={this.changeText} />
      </div>
    );
  }
}

export default App;
