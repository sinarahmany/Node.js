import React from "react";
import ReactDOM from "react-dom";
import Timer from "./login";
import TodoApp from "./TodoApp";

// class Apps extends React.Component {
//   constructor(props) {
//     super(props);
//     this.init();
//     this.state = { username: "" };
//   }
//   //to get user email
//   mySubmitHandler = event => {
//     event.preventDefault();
//     alert("WELCOME DEAR " + this.state.username);
//   };
//   myChangeHandler = event => {
//     this.setState({ username: event.target.value });
//   };

//   //********* */
//   init() {
//     this.state = {
//       offsetX: "",
//       offsetY: "",
//       friction: 1 / 32
//     };
//     this._mouseMove = this._mouseMove.bind(this);
//   }
//   componentDidMount() {
//     document.addEventListener("mousemove", this._mouseMove);
//   }
//   componentWillUnmount() {
//     document.removeEventListener("mousemove", this._mouseMove);
//   }
//   _mouseMove(e) {
//     let followX = window.innerWidth / 2 - e.clientX;
//     let followY = window.innerHeight / 2 - e.clientY;

//     let x = 0,
//       y = 0;
//     x += (-followX - x) * this.state.friction;
//     y += (followY - y) * this.state.friction;
//     this.setState({
//       offsetX: x,
//       offsetY: y
//     });
//   }
//   render() {
//     let offset = {
//       transform: `translate(-50%, -50%) perspective(600px)
//                     rotateY(${this.state.offsetX}deg)
//                     rotateX(${this.state.offsetY}deg)`
//     };

//     return (
//       <div className="wrapper" style={offset}>
//         <div className="shape2">
//           <form id="myForm" onSubmit={this.mySubmitHandler}>
//             <h3>Sign in</h3>
//             <h1>Hello {this.state.username}</h1>

//             <input
//               id="myinpy"
//               className="user"
//               type="text"
//               ref="username"
//               placeholder="enter you username"
//               onChange={this.myChangeHandler}
//             />
//             <br />
//             <input
//               className="password"
//               type="password"
//               ref="password"
//               placeholder="enter password"
//             />
//             <br />
//             <input type="submit" value="Login" className="submit" />
//             <p id="bla">Move your mouse or finger around</p>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
//ReactDOM.render(<Apps />, document.getElementById("app"));
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }
  mySubmitHandler = event => {
    event.preventDefault();
    alert("hi Dear " + this.state.username);
  };
  myChangeHandler = event => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div class="divs">
        <div class="container-fluid">
          <div class="row no-gutter">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div class="col-md-8 col-lg-6">
              <div class="login d-flex align-items-center py-5">
                <div class="container">
                  <div class="row">
                    <div class="col-md-9 col-lg-8 mx-auto">
                      <h3 class="login-heading mb-4">
                        Java is the best programming language
                      </h3>
                      <form onSubmit={this.mySubmitHandler}>
                        <div class="form-label-group">
                          <input
                            type="email"
                            id="inputEmail"
                            class="form-control"
                            placeholder="Email address"
                            onChange={this.myChangeHandler}
                            required
                            autofocus
                          />
                          <label for="inputEmail">Email address</label>
                        </div>

                        <div class="form-label-group">
                          <input
                            type="password"
                            id="inputPassword"
                            class="form-control"
                            placeholder="Password"
                            required
                          />
                          <label for="inputPassword">Password</label>
                        </div>

                        <div class="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          >
                            Remember password
                          </label>
                        </div>
                        <button
                          class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                          type="submit"
                        >
                          Sign in
                        </button>
                        <div class="text-center">
                          <a class="small" href="#">
                            Forgot password?
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById("root"));

{
  /* <form onSubmit={this.mySubmitHandler} class="CommentBox">
  <h1>Hello {this.state.username}</h1>
  <p>Enter your name, and submit:</p>
  <input
    type="text"
    className="user"
    onChange={this.myChangeHandler}
    placeholder="enter you username"
  />
  <br />
  <input
    className="password"
    type="password"
    ref="password"
    placeholder="enter password"
  />
  <br />
  <input type="submit" className="submit" />
</form>; */
}

//this is from class login
// ReactDOM.render(<Timer />, document.getElementById("timer-example"));
// ReactDOM.render(<TodoApp />, document.getElementById("todos-example"));
