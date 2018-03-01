import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Sunny', age: 25},
      {name: 'Hunny', age: 22},
      {name: 'Bunny', age: 20}
    ],
    otherstate: 'some other values'
  }

  switchNameHandler = () => {
    //console.log("was clicked");
    this.setState(
      {
        persons: [
          {name: 'Sunny Dewal', age: 25},
          {name: 'Hunny', age: 22},
          {name: 'Bunny', age: 22}
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I Am A React App</h1>
        <p>This is realy working !</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobby is gardening</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
