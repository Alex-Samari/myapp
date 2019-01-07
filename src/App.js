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

  //  This fires when the component first is mounted to the DOM (Happens only once)
  componentDidMount(){
    console.log("component mounted");
  }
  //  Fires when we get a change of state or props
  componentDidUpdate(prevProps, prevState){
    console.log('component updated');
    console.log(prevProps, prevState)
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <br/>
        <AddNinja addNinja={this.addNinja}/>
        <h4>Showing Ninjas older than 20 Years Old:</h4>
        <Ninjas ninjas={this.state.ninjas} delNinja={this.delNinja} />
      </div>
    );
  }
}

export default App;
