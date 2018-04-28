import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/auxaux';


const Cockpit = (props) => {
    let btnClass = classes.Button;
	  const assignedClasses = [];

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red); //classes=['red']
    }

    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold); //classes=['red', 'bold']
    }

    if(props.showPerson){
      btnClass = [classes.Button, classes.Red].join(' ');
    }

    return (
		<Aux>
			<h1>Hi, I'm a {props.appTitle}</h1>
	    <p className={assignedClasses.join(' ')}>This is really working!</p>
	    <button className={btnClass} onClick={props.btnHandler}>Toggle person</button>
		</Aux>
	)            
}

export default Cockpit;