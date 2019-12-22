import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

/*let name = "Sina";
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
ReactDOM.render(<Bye />, document.getElementById("root1"));*/

// //without jsx
// ReactDOM.render(
//   React.createElement("div", null, React.createElement("h1", null, "react")),
//   document.getElementById("root3")
// );

let SayHi = props => {
  console.log("props", props);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://assets.vancouverisawesome.com/wp-content/uploads/2017/10/23193949/skytrain.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h1>Hi {props.name}</h1>
        <div id="card-text2">
          <ul>
            {props.interest.map(elem => (
              <li key={elem.id}>{elem.name}</li>
            ))}
          </ul>
        </div>
        <a href="#" className="btn btn-primary">
          CALL!
        </a>
      </div>
    </div>
  );
};

//ReactDOM.render(<SayHi name="Saygin" />, document.getElementById("root2"));

/*ReactDOM.render(
  <SayHi name="Taylor" interest={["React", "javascript", "HTML"]} />,
  document.getElementById("root2")
);
*/
let Cards = ()=>{
  return{
    <div className="row"> 
    <SayHi
    name="john Doe"
    interest={[
      { id: 1, name: "murder" },
      { id: 7567, name: "goon" },
      { id: 787, name: "killer" }
    ]}
  />
  <SayHi
    name="sidfh Doe"
    interest={[
      { id: 1, name: "muwefwrder" },
      { id: 75367, name: "fwefgoon" },
      { id: 7837, name: "kiwefwller" }
    ]}
  />
  </div>
  };
};
ReactDOM.render(
  <Cards />,document.getElementById("card-text2")
);
