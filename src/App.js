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
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
