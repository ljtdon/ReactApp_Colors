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
    historyColors: ["#f1067f", "#94e721", "#334466", "#7d9dda", "#bbaa94"],
    name: '',
    selectedColor: {id: null, color: null}
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
      // console.log(color);  

       if (color === '#') {                   
          
        // console.log('unutar if');           
        color = this.getRandomColor();
        
       }
      //  console.log('izvan if');  
       this.stateUpColor(color);
      //  console.log(color);  
       return color;      
    }          

    // Changing state

    stateUpColor = (color) => {
      // console.log('state color'); 
      // console.log(color); 

      // const newColors = this.state.historyColors; 
      // newColors.push(color:color);

      const newColors = this.state.historyColors.concat(color);


      this.setState({          
        style: {      
          backgroundColor: color            
        },       
        historyColors: newColors
      });    
      
      // console.log(this.state.style); 
      // console.log(this.state.historyColors);
      

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
      
      //  console.log('get random');
      //  console.log(color);
      
      return color;
    }
  
    applyHistoryColorHandler = (index, hColor) => {
      this.setState({
        selectedColor: {id: index, color: hColor}
      });

    }

    applyColorHandler = (selectedColor) => {
      const index = selectedColor.id;
      console.log(index);
      console.log(selectedColor.color);
      this.setState({
        style: {
          backgroundColor: selectedColor.color
        }
      });
    }

    deleteColorHandler = (selectedColor) => {
      const index = selectedColor.id;
      console.log(index);
      console.log(selectedColor.color);
      const newHistroyColors = [ ...this.state.historyColors];      
      newHistroyColors.splice(index, 1);      
      this.setState({
        historyColors: newHistroyColors
      });      
    }
    

    welcomeHandler = (event) => {
      this.setState({
        name: event.target.value
      });
    }

render() {
  let history = <span>No History Colors</span>;

  if (this.state.historyColors.length !== 0) {
    history = this.state.historyColors.map((hColor, index) => {
      return  <HistoryColors key={index} color={hColor} 
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

      {/* <div>      
        <Welcome 
        name={this.state.name}
        change={this.welcomeHandler} />
      </div> */}
    
    <div>     
      <div className="History-colors">History Colors</div>  
      <div className="Btn-section"> 
     
      <button className="Btn" onClick={() => this.applyColorHandler(this.state.selectedColor)}>Apply</button>  <button className="Btn" onClick={() => this.deleteColorHandler(this.state.selectedColor)}>Delete</button> 
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
