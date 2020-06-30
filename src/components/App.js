import React from "react";
// import "../App.css";
import Header from "./Header";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <div className="tree-service">
        <Header tagline="Happy Little Trees" />
        <Home />
      </div>
    );
  }
}

export default App;
