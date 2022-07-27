import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstname: "Abraham", lastname: "Dulla" },
    };
  }

  render() {
    return (
      <div>
        <p>
          My Name is {this.state.name.firstname} {this.state.name.lastname}
        </p>
        <button
          onClick={() => {
            this.setState(
              {
                name: { firstname: "Eyu", lastname: "Something" },
              },
              () => {
                console.log(this.state);
              }
            );
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
