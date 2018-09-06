import React from 'react';

const headerComp = (props) => {

    return (
        <div onClick={props.click} className="Header-comp">
            Click to change color
        </div>
    )   
}


export default headerComp;