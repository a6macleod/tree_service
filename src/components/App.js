import React from "react";
import "../App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="tree-service">
          <header className="top">
            <div className="container">
              <h1>Budd's Tree Service</h1>
              <h3 className="tagline">
                <span>"Happy Little Trees"</span>
              </h3>
            </div>
            <nav>
              <ul>
                <li className="navButton">
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
                <li className="navButton">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="navButton">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </header>

          {/* This is the content that gets reloaded */}
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>

          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
