import React from "react";
class Item extends React.Component {
    render() {
      return (
        <li className="container col-4 ">
          {this.props.name}, ${this.props.price}
        </li>
      );
    }
  }
  export default Item;