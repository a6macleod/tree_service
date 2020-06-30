import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <div className="container">
          <h1>Budd's Tree Service</h1>
          <h3 className="tagline">
            <span>{this.props.tagline}</span>
          </h3>
        </div>
        <nav>
          <ul>
            <li className="navButton">
              <a href="#">Home</a>
            </li>
            <li className="navButton">
              <a href="#">About</a>
            </li>
            <li className="navButton">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  tagline: PropTypes.string.isRequired,
};

export default Header;
