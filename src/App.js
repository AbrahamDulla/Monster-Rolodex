import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Abraham",
      fname: "Dulla",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>My Name is {this.state.name}</p>
          <button>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
