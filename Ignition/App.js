import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im child 1 h1 tag"),
    React.createElement("h2", {}, "Im child 1 h2 tag"),
  ]),
  React.createElement(
    "div",
    { className: "child2" },
    React.createElement("h1", {}, "Im child 2 h1 hello tag")
  ),
]);

const roots = ReactDOM.createRoot(document.getElementById("root"));
roots.render(parent);
