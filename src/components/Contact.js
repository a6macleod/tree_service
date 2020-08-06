import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="location">
          <h2>location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47258.55673734149!2d-85.59025943590164!3d42.24308057373457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88179c3143b9024d%3A0x9a4b4e42f6b7d01c!2sMilwood%2C%20Kalamazoo%2C%20MI!5e0!3m2!1sen!2sus!4v1596491653151!5m2!1sen!2sus"
            width="600"
            height="450"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        {/* Image of man*/}

        {/* Quote about trees*/}
        {/* Map */}
        {/*  */}
      </div>
    );
  }
}

export default Contact;
