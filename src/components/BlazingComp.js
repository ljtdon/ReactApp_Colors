import React from 'react';

const blazingComp = (props) => {

	
		return (
		<div>
			<h1 onClick={props.click}>New Comp BlazingComp {props.value}</h1>						
		</div>
		);
}

export default blazingComp;