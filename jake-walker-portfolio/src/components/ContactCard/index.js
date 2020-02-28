import React from "react";
import "./style.css";

function ContactCard(props) {
  return (
    <div>
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className="card-body">
            <div id="contactRow" className="row">
              <h1 className="card-title">Contact Me</h1>
            </div>
            <ul>
              <li>
                <h5 className="card-title">Phone: </h5>(573) 842-7255
              </li>
              <br />
              <li>
                <h5 className="card-title">Email: </h5>jcw2865@gmail.com
              </li>
              <br />
              <li>
                <h5 className="card-title">GitHub</h5>
                <a href="https://github.com/jcw2865"
                  className="link">jcw2865</a>
              </li>
              <br />
              <li>
                <h5 className="card-title">LinkedIn</h5>
                <a href="https://www.linkedin.com/in/jake-walker-22005361/" className="link">Jake Walker</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
