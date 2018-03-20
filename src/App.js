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

  changeContent = (event) => {
    this.setState({
      content: event.target.value
    });
  }
 


  changeStyle = () => {
    fetch('http://www.colr.org/json/color/random')
       .then(res => res.json())
       .then(data => this.setState({color: 'data.colors[0].hex'}));            
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>


         <BlazingComp 
           content={this.state.content}
           newContent={this.changeContent}
           click={this.changeStyle}></BlazingComp>
          
          
      </div>
    );
  }
}

export default App;
