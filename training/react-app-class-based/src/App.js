import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class Output extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <span>{this.props.text}</span>
      </div>
    )
  }
}

class App extends Component {

  constructor() {
    super();
    this.inputHandler = this.inputHandler.bind(named);
  }

  inputHandler(event) {
    console.log(event);
    console.log(this.inputHandler);
    console.log('Value of this: ', this);
  } 

  render() {
    console.log("App.render() called...");
    console.dir(this.inputHandler)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Output />
          <input type='text' onChange={this.inputHandler} />
        </header>
      </div>
    );
  }
}

export default App;
