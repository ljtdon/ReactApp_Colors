import React from 'react';

const historyColors = (props) => {
    
    return(
        <div>
        <div className="Color-square" style={{backgroundColor: props.color }}
        onClick={props.click}>            
        </div>
          
        </div>
    );
}

export default historyColors;