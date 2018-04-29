import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/auxaux';
import withClass from '../../../hoc/withClass2';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';

class Person extends Component{
	constructor (props) {
	    super(props);
	    console.log('[Person.js] inside Constructor', props);
        this.inputElem = React.createRef();
	}

	componentWillMount(){
	  console.log('[Person.js] inside componentWillMount');
	}

	componentDidMount(){
	   console.log('[Person.js] inside componentDidMount');
       if(this.props.position === 0){
            this.inputElem.current.focus();
        }
	}
    
    focus(){
        this.inputElem.current.focus();
    }

	render () {
		console.log('[Person.js] inside render()');

		return (
			<Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated</p> : null }
                </AuthContext.Consumer>
				<p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age}!</p>
				<p>{this.props.children}</p>
				<input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                    ref={ this.inputElem }/>
			</Aux>
		)
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
} 

export default withClass(Person, classes.Person);