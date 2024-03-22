// const heading = React.createElement("h1",{id : "heading"},"HELLO WORLD ! ");

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h2", { id: "child" }, [
    React.createElement("h1", {}, "this is H1"),
    React.createElement("h2", {}, "this is H2")
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
