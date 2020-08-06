import React from "react";
import "../contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="left-side">
          <div className="contact-info">
            <p className="contact-phone">
              <span className="bold">Phone: </span>
              <a href="tel:+1234567890">(123)456-7890</a>
            </p>
            <p className="contact-email">
              <span className="bold">Email: </span>
              <a href="mailto:totallybuddstreeservice@notfake.com">
                totallybuddstreeservice@notfake.com
              </a>
            </p>
            <p className="contact-location">
              <span className="bold">Our Location: </span>
              Budd's Tree Service
            </p>
            <p className="contact-address">111 Kalamazoo, MI 49001</p>
          </div>
          <div className="form-section">
            <form action="" className="contact-form">
              <div className="form-name">
                <label htmlFor="name">
                  Name<span className="requried-field">*</span>
                </label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="form-email">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-phone">
                <label htmlFor="phone">
                  Phone number<span className="requried-field">*</span>
                </label>
                <input type="tel" name="phone" id="phone" required />
              </div>
              <div className="form-message">
                <label htmlFor="message">
                  Message<span className="requried-field">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-submit">
                <input type="submit" value="Submit" id="submit-button" />
              </div>
            </form>
          </div>
        </div>

        <div className="right-side">
          <div className="location">
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
      </div>
    );
  }
}

export default Contact;
