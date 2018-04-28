import React, {Component} from 'react';

//function which takes 2 parameters component and class, then return new stateless component or anonymous class

const withClass = (WrappedComponent, className) => {
	return class extends Component {
		render(){
			return (
				<div className={className}>
		 			<WrappedComponent {...this.props}/>
		 		</div>
		 	)
		}
	}
}

//
// const withClass = (WrappedComponent, className) => {
// 	  return (props) => (
// 		<div className={className}>
// 			<WrappedComponent {...props}/>
// 		</div>
// 	  )
// }

export default withClass;