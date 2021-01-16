import { render } from "@testing-library/react";
import ToyCard from "./ToyCard";
import React, { Component } from "react";

export default class ToyContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="toy-collection">
        {this.props.toys.map((toy) => {
          return (
            <ToyCard
              key={toy.id}
              toy={toy}
              handleDelete={this.props.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

// const ToyContainer = () => {

//   // constructor(props) {
//   //   super(props)

//   // }
//   // render(){
//   return(
//     <div id="toy-collection">
//       {props.toys.map(toy => {

//       })}
//     </div>
//   );
// }

// export default ToyContainer;
