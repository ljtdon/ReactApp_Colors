import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlazingComp from './components/BlazingComp';


class App extends Component {

  state = {
    color: '000'
  }


  changeStyle = () => {
    fetch('http://www.colr.org/json/color/random')
       .then(res => res.json())
       .then(data => this.setState({color: 'data.colors[0].hex'}));  
          
  }

  changeInputText = () => {
    console.log('Text changed');
  }
 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <BlazingComp click={this.changeStyle}></BlazingComp>
          <input type="text" onInput={this.changeInputText} />
      </div>
    );
  }
}

export default App;
