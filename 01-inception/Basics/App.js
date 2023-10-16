// const headings = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

// React.createElement returns a React element, which is a lightweight description of what the DOM element should look like. React elements are not actual DOM elements, but they are used by React to efficiently update the DOM.

// React.createElement function has 3 arguements
// 1. Which Tag we want (like h1, h2, div , section etc....)
// 2. Attributes of the functions (like id, class etc...)
// 2.Which children we want

// React.createElement createsReact elements (JS Objects) . NOT h1 tag..
// In that React elements (JS Objects) attributes are "props" and the inside the text is known as "children".

// const roots = ReactDOM.createRoot(document.getElementById("root"));

// React.createRoot is a function that creates a new React root. A React root is a container for React components. It is the top-level element in a React application.

// roots.render(headings);

// root.render ---> render the react elements into html tag (h1 tag in this code that browser understands )

// Exercise 1:

// Create the structure using React Fundamentals

{
  /* <div id="parent">
<div id="child">
  <h1>Im child 1 h1 tag</h1>
  <h2>Im child 1 h2 tag</h2>
</div>
<div class="child2">
  <h1>Im child 2 h1 tag</h1>
</div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im child 1 h1 tag"),
    React.createElement("h2", {}, "Im child 1 h2 tag"),
  ]),
  React.createElement(
    "div",
    { className: "child2" },
    React.createElement("h1", {}, "Im child 2 h1 tag")
  ),
]);

const roots = ReactDOM.createRoot(document.getElementById("root"));
roots.render(parent);
