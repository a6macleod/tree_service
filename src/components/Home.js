import React from "react";
import "../Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 className="telephone">
          <a href="tel:+123456789">Call us!</a>
        </h2>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            repellat doloribus laboriosam, beatae odio molestias blanditiis.
            Iste sit quis officiis sapiente, ipsa ut, temporibus delectus
            laudantium omnis itaque vero maxime?
          </p>
          <span>What we do</span>
          <div className="services-container">
            <div className="services">Tree Removal</div>
            <div className="services">Tree Trimming</div>
            <div className="services">Tree Health</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
