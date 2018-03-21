import React from 'react';

const blazingComp = (props) => {

	
		return (
		<div>
			<h1 style={props.style} onClick={props.click}>{props.content}</h1>								
		</div>
		);
}

export default blazingComp;