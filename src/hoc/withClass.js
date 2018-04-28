import React from 'react';

//stateless component that returns some jsx and take props

const withClass = (props) => (
	<div className={props.classes}>
		{props.children}
	</div>
)

export default withClass;