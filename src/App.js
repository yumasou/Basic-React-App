import React from "react";
import { state, setState, createRef } from "react";
import AddForm from './AddForm'
import ITem from './Item'
import './App.css'

class App extends React.Component {
  state = {
    items: [
      { id: 0, name: "Ko Ko", price: 200 },
      { id: 0, name: "Mg Mg", price: 250 },
    ],
  };
  add = (name,price) => {
    let id = this.state.items.length + 1;
    this.setState({
      items: [...this.state.items, { id, name, price }],
    });
  };
  
  render() {
    return (
      <div className="container border border-3 border-primary">
        <h1 className="App border border-3 border-danger">Hello React</h1>
        <ul className=" col-6 border border-3 border-danger  m-auto">
          {this.state.items.map((i) => {
            return <ITem key={i.id} name={i.name} price={i.price} />;
          })}
        </ul>
        <AddForm add={this.add}  />
      </div>
    );
  }
}
export default App;
