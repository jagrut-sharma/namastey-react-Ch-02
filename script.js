import React from "react";
import ReactDOM from "react-dom/client";

/*
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namastey 🙏"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    hello: "world",
  },
  "Welcome to React from parcel"
);


const container = React.createElement("div", {}, [heading1, heading2]);
// multiple elements are passed as array elements


// console.log(heading); // React Element => Object
*/
/*
const container = React.createElement(
  "div",
  {
    className: "title",
  },
  [
    React.createElement("h1", {}, "Namastey React🙏"),
    React.createElement("ul", {}, [
      React.createElement("li", {}, "Home"),
      React.createElement("li", {}, "About Us"),
      React.createElement("li", {}, "Contact"),
    ]),
  ]
);*/

console.log("Hi"); // testing Babelrc plugin to remove console

const ele = (
  <div id="container">
    <h1 key="heading">Namastey React🙏</h1>
    <ul key="list-header">
      <li key="home">Home</li>
      <li key="about_us">About Us</li>
      <li key="contact">Contact</li>
    </ul>
  </div>
);

const HeaderEle = () => (
  <div>
    <HeaderComponent />
    <br></br>
    {ele}
    {/* {3 + 1} */}
    {/* {console.log("Hello")} */}
    <br></br>
    <h1 key="component-1">Hi, Welcome</h1>
    <h2 key="component-2">I am making my first component in React</h2>
    <h3 key="component-3">This is awesome and amazing.</h3>
  </div>
);

const HeaderComponent = () => (
  <nav className="nav-container">
    <div className="img-container img-logo">
      <img className="img" src={require("./assets/namasteydev.png")} />
    </div>
    <form className="searchbar">
      <input type="text" placeholder="Search..."></input>
      <button type="submit">Search</button>
    </form>
    <div className="img-container img-user">
      <img className="img" src={require("./assets/Sample_User_Icon.png")} />
    </div>
  </nav>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);
// root.render(ele);
root.render(<HeaderEle />);
// root.render(<HeaderEle></HeaderEle>);
// root.render(HeaderEle()); // All are same
