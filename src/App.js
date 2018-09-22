import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name : "srikanth",
      count : 0
    };
  }
  Increment =  () =>{
   this.setState({count : this.state.count+1});
  }
  render() {
    return (
      <div className="App">
      <h1>welcome to the App</h1>
      {this.state.name}
      <button onClick={this.Increment}> Increase</button>
      <br/>
      
      {this.state.count}
      </div>
    );
  }
}

export default App;
