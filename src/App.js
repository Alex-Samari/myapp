import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Alex', age: '21', belt: 'Black', id: 1 },
      { name: 'John', age: '22', belt: 'Green', id: 2 },
      { name: 'Jane', age: '24', belt: 'Orange', id: 3 }
    ]
  }
  addNinja = (ninja)=>{
    ninja.id = Math.random();
    //  "..." is a spread operator and copies the original array and spreads its elements into a new array
    //  array.push method is not suggested here
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  delNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      //  invoke a return statement if the id of the ninja we're trying to remove does NOT match the ninja that should be removed
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas  
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <h2>Welcome!</h2>
        <Ninjas ninjas={this.state.ninjas} delNinja={this.delNinja} />
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
