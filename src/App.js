import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlazingComp from './components/BlazingComp';


class App extends Component {

  state = {
    content: 'Text from Component',
    style: {
      color: '#000'
    },
    switcher: false
  }


  // Input bind to Component text
  changeContent = (event) => {
    this.setState({
      content: event.target.value      
    });
  }


  // Changing color
  changeStyle = () => {

    this.switcher = !this.switcher;
    
    if(this.switcher){

      // Fetch color
      fetch('http://www.colr.org/json/color/random')     
      .then(res => res.json())         
      .then(data => this.getColor(data.colors[0].hex));

      // Adjusting color and change state
      this.getColor = (color) => {
          if(color==='') {
            console.log(color);
            this.changeStyle();
          }
          else {            
            color = '#'.concat(color.toString());
            console.log(color);
            this.setState({          
              style: {      
                color: color            
            }    
          });
          }
         
      } 
    }      
    else {
      this.setState({          
        style: {      
          color: '#000'           
        }    
      });
    } 
    
    
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
    style={this.state.style}           
    click={this.changeStyle}></BlazingComp>

    <input type="text" onChange={this.changeContent} />
    </div>
    );
}
}

export default App;
