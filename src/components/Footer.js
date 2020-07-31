import React from "react";
import "../Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="container-footer">
        <footer>
          <div className="contact">
            <div className="social">FB</div>
            <div className="phone">
              <a href="tel:+123456789">Call us!</a>
            </div>
            <div className="email-contact">
              <a href="mailto:totallybuddstreeservice-notfake">Email Budd</a>
            </div>
          </div>
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
          <span> 2020</span>
          <a href="github.com/a6macleod">Andrew MacLeod</a>
        </footer>
      </div>
    );
  }
}

export default Footer;
