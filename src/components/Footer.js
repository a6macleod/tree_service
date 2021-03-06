import React from "react";
import fbIcon from "../images/fb-icon.png";
import instagram from "../images/insta-icon.png";
import "../Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="container-footer">
        <footer>
          <div className="social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={fbIcon} alt="Facebook Icon Link" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={instagram} alt="Instagram Icon Link" />
            </a>
          </div>

          <div className="contact">
            <a href="tel:+123456789">Call us!</a>
            <a href="mailto:totallybuddstreeservice@notfake.com">Email Budd</a>
          </div>

          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
          <span> 2020 </span>
          <a
            href="https://github.com/a6macleod"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andrew MacLeod
          </a>
        </footer>
      </div>
    );
  }
}

export default Footer;
