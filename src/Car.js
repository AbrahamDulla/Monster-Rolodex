import { Component } from "react";

class Car extends Component {
  constructor() {
    super();
    this.state = {
      car1: { name: "Toyota", color: "red", price: "2000" },
      car2: { name: "Toyota", color: "red", price: "2000" },
      car3: { name: "Toyota", color: "red", price: "2000" },
    };
  }

  render() {
    return (
      <div>
        <p>Car Shopping List</p>
        <ul>
          <li>
            Name {this.state.car1.name} {<br></br>}
            Color {this.state.car1.color} {<br></br>}
            Price {this.state.car1.price} {<br></br>}
          </li>
          <li>
            Name {this.state.car2.name} {<br></br>}
            Color {this.state.car2.color} {<br></br>}
            Price {this.state.car2.price} {<br></br>}
          </li>
          <li>
            Name {this.state.car3.name} {<br></br>}
            Color {this.state.car3.color} {<br></br>}
            Price {this.state.car3.price} {<br></br>}
          </li>
        </ul>
      </div>
    );
  }
}

export default Car;
