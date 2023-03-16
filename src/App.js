import React from "react";
import AddForm from "./AddForm";
import ITem from "./Item";
import "./App.css";
const App = (props) => {
  let [Items, setItem] = React.useState([
    { id: 1, name: "Apple", price: 0.99 },
    { id: 2, name: "Orange", price: 0.99 },
  ]);

  const add = (name, price) => {
    let id = Items.length + 1;
    setItem([...Items, { id, name, price }]);
  };
  return (
    <div>
      <ul className="col-4 m-auto mt-4">
        {Items.map((i) => {
          return <ITem key={i.id} name={i.name} price={i.price} />;
        })}
        </ul>
      <AddForm add={add}></AddForm>
    </div>
  );
};
export default App;
