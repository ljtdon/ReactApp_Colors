import React from 'react';

const historyColors = (props) => {
    
    return(
        
        <div className="Color-square" style={{backgroundColor: props.color }}
        onClick={props.click}>                   
        </div>
          
       
    );
}

export default historyColors;