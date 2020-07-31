import React from "react";
import portrait from "../images/portrait.jpg";

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 className="telephone">
          <a href="tel:+123456789">(123)456-7890</a>
        </h2>
        {/* Image of an old weathered man*/}
        <div className="services-container">
          <img src={portrait} alt="a mans head surrounded by leaves" />
          <span>
            Photo by{" "}
            <a href="https://unsplash.com/@dianasimumpande?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Diana Simumpande
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/t/people?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>
        {/* Quote about trees*/}
        {/* Map */}
        {/*  */}
      </div>
    );
  }
}

export default Contact;
