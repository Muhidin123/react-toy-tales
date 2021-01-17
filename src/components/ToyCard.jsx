import React, { Component } from "react";
import Fetch from "./Fetch";

const fetchImport = new Fetch();

class ToyCard extends Component {
  constructor(props) {
    super(props);
    const { id, likes } = this.props.toy;

    this.state = {
      likes,
      id,
    };
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  componentDidUpdate(prevProp, prevState) {
    const { name, image } = this.props.toy;
    if (prevState !== this.state.likes) {
      let body = {
        name,
        image,
        likes: this.state.likes,
      };
      fetchImport
        .generalFetch(
          `http://localhost:3001/toys/${this.state.id}`,
          fetchImport.makeOptions("PATCH", body)
        )
        .then(console.log);
    }
  }

  render() {
    const { name, image } = this.props.toy;
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{this.state.likes} Likes </p>
        <button className="like-btn" onClick={this.handleLikes}>
          Like {"<3"}
        </button>
        <button
          className="del-btn"
          onClick={() => this.props.handleDelete(this.state.id)}
        >
          Donate to GoodWill
        </button>
      </div>
    );
  }
}

export default ToyCard;
