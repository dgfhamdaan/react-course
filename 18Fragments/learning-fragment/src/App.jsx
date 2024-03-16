import React from "react";

function App() {

  let fooditems = ['salad','green veg','roti','milk','fruit'];

  return (
    <>
      <h1>Healthy food</h1>
      <ul className="list-group">
        {fooditems.map((item) => (<li key={item} className="list-group-item">{item}</li>))}
      </ul>
    </>
  );
}

export default App;
