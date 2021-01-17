import React from "react";
import "./App.css";

import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";
import Fetch from "./components/Fetch";

const fetchImport = new Fetch();

class App extends React.Component {
  state = {
    display: false,
    toys: [],
  };

  componentDidMount() {
    fetchImport.generalFetch("http://localhost:3001/toys").then((toys) => {
      this.setState({
        toys,
      });
    });
  }
  handleSubmit = (body) => {
    fetchImport
      .generalFetch(
        "http://localhost:3001/toys",
        fetchImport.makeOptions("POST", body)
      )
      .then((toy) => {
        this.setState({
          toys: [...this.state.toys, toy],
        });
      });
  };

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  handleDelete = (id) => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    }).then(console.log("Deleted"));

    const newToys = this.state.toys.filter((toy) => {
      return toy.id !== id;
    });
    return this.setState({
      toys: newToys,
    });
  };

  render() {
    return (
      <>
        <Header />
        {this.state.display ? (
          <ToyForm handleSubmit={this.handleSubmit} />
        ) : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} handleDelete={this.handleDelete} />
      </>
    );
  }
}

export default App;
