import React from "react";
import ReactDOM from "react-dom";

let name = "Sina";
// ReactDOM.render(<h1>Hell oooooo {name}</h1>, document.getElementById("root"));
ReactDOM.render(
  <div className="root1">
    <h1>Hell oooooo {name}</h1>
    <p id="parag">Welcome to React</p>
  </div>,
  document.getElementById("root")
);

let Bye = () => {
  return (
    <div className="root2">
      <h1>Bye </h1>
      <p>it`s time to go</p>
    </div>
  );
};
ReactDOM.render(<Bye />, document.getElementById("root1"));

// //without jsx
// ReactDOM.render(
//   React.createElement("div", null, React.createElement("h1", null, "react")),
//   document.getElementById("root3")
// );

let SayHi = props => {
  console.log("props", props);
  return (
    <div>
      <h1>Hi {props.name}</h1>
      <p className="parag2">react is fun</p>
      <ul>
        {props.interest.map(elem => (
          <li>{elem}</li>
        ))}
      </ul>
    </div>
  );
};

//ReactDOM.render(<SayHi name="Saygin" />, document.getElementById("root2"));
ReactDOM.render(
  <SayHi name="Taylor" interest={["React", "javascript", "HTML"]} />,
  document.getElementById("root2")
);
