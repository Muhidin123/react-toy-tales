import { render } from "@testing-library/react";
import ToyCard from "./ToyCard";
import React from "react";

// OPTION 1 to do it:

// export default class ToyContainer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div id="toy-collection">
//         {this.props.toys.map((toy) => {
//           return (
//             <ToyCard
//               key={toy.id}
//               toy={toy}
//               handleDelete={this.props.handleDelete}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

// OPTION 2 to do it

const ToyContainer = (props) => {
  return (
    <div id="toy-collection">
      {props.toys.map((toy) => {
        return (
          <ToyCard key={toy.id} toy={toy} handleDelete={props.handleDelete} />
        );
      })}
    </div>
  );
};

export default ToyContainer;
