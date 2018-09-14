import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComp from './components/HeaderComp';
import HistoryColors from './components/HistoryColors';
import Welcome from './components/Welcome';


class App extends Component {

  state = {    
    style: {
      backgroundColor: 'plum'
    },
    historyColors: ["#f1067f", "#94e721", "#334466", "#7d9dda", "#bbaa94", "#a3287b"], 
    selectedColor: {id: null, color: null},
    classColor: ['Btn'],
    name: ''
  }

  

  // Change color
  changeColorHandler = () => {
    
      // Fetch color
      fetch('http://www.colr.org/json/color/random')     
      .then(res => res.json())         
      .then(data => {        
        this.getColorData(data.colors[0]);              
      })
      .catch(error => {        
        let color = this.getRandomColor();

        this.stateUpColor(color);

        console.log('catch error');
        console.log(color);         
       
      });  
    }

    // Method get color

    getColorData = (data) => { 
      let color = '#'.concat(data.hex);     
      
      if (color === '#') {                 
        color = this.getRandomColor();        
      }
      
      this.stateUpColor(color);
     
      return color;      
    }          

    // Applying new color, and adding to history

    stateUpColor = (color) => {
  
      const newColors = this.state.historyColors.concat(color);       

      if(newColors.length !== 0) {       
        this.setState({
          classColor: ['Btn'],
          style: {      
              backgroundColor: color            
            },       
          historyColors: newColors
        });
      } 
      else {
         this.setState({          
            style: {      
              backgroundColor: color            
            },       
            historyColors: newColors
        });    
      }          
    }

    // Generate random color
    getRandomColor = () => {
      let colorRandom;
      let colorHex;
      let color = '';

      for (let i=0; i<6; i++) {
        colorRandom = Math.floor(Math.random()*16);
        colorHex = colorRandom.toString(16);
        color = color.concat(colorHex);        
      }

      color = '#'.concat(color);   
      
      return color;
    }
  
    applyHistoryColorHandler = (index, hColor) => {          
      const newSwitch = !this.state.switch;

      this.setState({
        selectedColor: {id: index, color: hColor}, 
        switch: newSwitch       
      });     
    }

    applyColorHandler = (selectedColor) => {        

      if (this.state.selectedColor.color !== null) {
         this.setState({
            style: {
            backgroundColor: selectedColor.color
            }
          });
      }
    }

    deleteColorHandler = (selectedColor) => {
      const index = selectedColor.id;
      const newHistroyColors = [ ...this.state.historyColors];        

      newHistroyColors.splice(index, 1);     

      if (this.state.selectedColor.color !== null) {
        if (newHistroyColors.length === 0) {
          this.setState({
            historyColors: newHistroyColors,
            selectedColor: {id: null, color: null}, 
            classColor: ['Btn', 'Btn-hidden']          
          }); 
        }
        else {
          this.setState({
            historyColors: newHistroyColors,
            selectedColor: {id: null, color: null}                    
          });          
        }  
      }
    
    }   

    welcomeHandler = (event) => {
      this.setState({
        name: event.target.value
      });
    }



render() {
  let history = <span>No History Colors</span>;
  let btn = this.state.classColor;

  if (this.state.historyColors.length !== 0) {
    history = this.state.historyColors.map((hColor, index) => {     
      return  <HistoryColors 
        key={index} 
        color={hColor} 
        click={() => this.applyHistoryColorHandler(index, hColor)}
      />       
    });    
  } 
 

  return (
    <div className="App">
      <header className="App-header" style={this.state.style}>   
        <img src={logo} className="App-logo" alt="logo" />  
        <HeaderComp 
          click={this.changeColorHandler} />           
      </header>

    <div>      
        <Welcome 
        name={this.state.name}
        change={this.welcomeHandler} />
      </div> 
    
    <div>     
      <div className="History-colors">History Colors</div>  
      <div className="Btn-section"> 
     
      <button className={btn.join(' ')} onClick={() => this.applyColorHandler(this.state.selectedColor)}>Apply</button>  

      <button className={btn.join(' ')} onClick={() => this.deleteColorHandler(this.state.selectedColor)}>Delete</button> 
      </div>
      
      <div className="Colors">    
        {history}
      </div>      
    </div>

   
   
    </div>
    );
  }
}

export default App;
