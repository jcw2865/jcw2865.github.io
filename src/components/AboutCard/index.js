import React from "react";
// import CardBtn from "../CardBtn";
import "./style.css";
import Image from "./IMG_3836.jpeg";

function AboutCard(props) {
  return (<div>
    <div className="row no-gutters">
      <div className="col-md-12">
        <div className="card-body">
          <img src={Image} className="card-img" id="aboutMeImg"
            alt="About Me" />
          <div className="card-text"><h1 className="card-title">About Me</h1>
            My background is in operations and project management. For the past
                          five years
                          I have worked with both large organizations such as the United States Army as well as
                          burgeoning
                          tech start-ups. I am now looking to bring my operational skills to the field of web
                          development
                                and help organizations achieve their goals with efficiency and reliability.</div>
          <br />
          <p className="card-text"> I have been married to my beautiful wife, Natalie, since May 2019, and we have a three year old Jack-Russel/Shi-Tsu mix named Scoots. I love doing
              all sorts of things, but I especially enjoy spending time with friends and family, being
              active, and experimenting in the kitchen. All of that being said I really do find joy in
              most things and am always eager to learn something new and try something for the first
              time.
                            </p>
          <br />
          <div className="card-text"><strong id="strongLink">Working proficiency in the following technologies:</strong>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>React</li>
            </ul>
          </div>
          <br />
          <div className="card-text"><strong id="strongLink">Links</strong>
            <ul>
              <li>
                <a href="https://github.com/jcw2865" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jake-walker-22005361/" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div >
  );
}

export default AboutCard;
