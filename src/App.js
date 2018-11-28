import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <div className="Main-File">

        <div style={{ display: this.state.show ? "" : "none" }} className="modal-show">
          <h3>SmoothFlow Chat App</h3>
        </div>


        <div className="show-icon" onClick={() => this.setState({ show: !this.state.show })}>
          <h4>Show</h4>
        </div>

      </div>
    );
  }
}

export default App;
