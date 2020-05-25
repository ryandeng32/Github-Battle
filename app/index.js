// these 2 are separate because React can be used in mobile development.
// so it's not necessarilly always rendering to a DOM
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popular from "./components/Popular";

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
  render() {
    // this is called JSX
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

ReactDOM.render(
  // two arguments are
  // React Element
  // Where to render the element to
  <App />,
  document.getElementById("app")
);
