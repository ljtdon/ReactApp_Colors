import React from 'react';

const blazingComp = (props) => {

	
		return (
		<div>
			<h1 onClick={props.click}>{props.content}</h1>								
		</div>
		);
}

export default blazingComp;