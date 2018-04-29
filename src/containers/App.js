import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/auxaux";
import withClass from "../hoc/withClass2";

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor (props) {
    super(props);
    console.log('[App.js] inside Constructor', props);

    this.state = {
      persons: [
        {id: 'rer1', name: "Michi", age: 28}, 
        {id: 'tet2',name: "Tom", age: 107}, 
        {id: 'erd3',name: "Lil Pip", age: 33}
      ],
      otherState: 'dfsdf dsfsfsd',
      showPerson: false,
      toggleClicked: 0,
      authenticated: false    
    };

  }

  componentWillMount(){
    console.log('[App.js] inside componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState);
  //  // return true;
  //   return nextState.persons !== this.state.persons ||
  //    nextState.showPerson !== this.state.showPerson;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState);
  }
    
  static getDerivedStateFromProps(nextProps, prevState){
      console.log('[UPDATE App.js] inside getDerivedStateFromProps', nextProps, prevState);
      return prevState;
  } 

  componentDidUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] inside componentDidUpdate');
  }
    
  getSnapshotBeforeUpdate(){
      console.log('[UPDATE App.js] inside getSnapshotBeforeUpdate');
  }    

  /*state = {
    persons: [
      {id: 'rer1', name: "Michi", age: "28"}, 
      {id: 'tet2',name: "Tom", age: "107"}, 
      {id: 'erd3',name: "Lil Pip", age: "33"}
    ],
    otherState: 'dfsdf dsfsfsd',
    showPerson: false
  }*/

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};
    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState((prevState, props) => {
      return ({
        showPerson: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      })
    });

  }
  
  loginHandler = () => {
      this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] inside render()');

    let persons = null;

    if(this.state.showPerson){
      persons = <Persons 
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler} />
      /*style[':hover'] = {
        background: 'salmon',
        color: 'black'
      }*/
    }

    return (
      <Aux>
        <button onClick={()=>{this.setState({showPerson: true})}}>Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          persons={this.state.persons}
          showPerson={this.state.showPerson}
          btnHandler={this.togglePersonHandler}
          login={this.loginHandler}/>
        <AuthContext.Provider value={this.state.authenticated}>
            {persons}
        </AuthContext.Provider>
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
