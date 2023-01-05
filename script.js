import React from "react";
import ReactDOM from "react-dom/client";

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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
