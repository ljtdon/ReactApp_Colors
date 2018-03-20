import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlazingComp from './components/BlazingComp';


class App extends Component {

  state = {
    content: 'BlazingComp',
    color: '000',
    value: ''
  }


  changeStyle = () => {
    fetch('http://www.colr.org/json/color/random')
       .then(res => res.json())
       .then(data => this.setState({color: 'data.colors[0].hex'}));  
          
  }

  inputTextHandler(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }
 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <BlazingComp content={this.state.content} click={this.changeStyle}></BlazingComp>
          <input type="text" value={this.state.value} onChange={this.inputTextHandler.bind(this)} />
      </div>
    );
  }
}

export default App;
