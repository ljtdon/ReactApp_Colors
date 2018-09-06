import React from 'react';

const welcome = (props) => {

    return(
        <div className="Welcome">
            Welcome {props.name}
            <input type="text" onChange={props.change} className="Welcome-input" placeholder="Please write your name" />
        </div>
    );
}

export default welcome;




