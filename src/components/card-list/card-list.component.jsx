import { Component } from "react";
import "./card-list.style.css";

class CardList extends Component {
  render() {
    console.log("render");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div className="card-container">
              <img
                style={{
                  width: "180px",
                  height: "180px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2`}
              />
              <h2>{name}</h2>
              <h2>{email}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
