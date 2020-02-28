import React from "react";
import "./style.css";
import HomepageImage from "./images/project1inprogress.png";
import YourOfficials from "./images/YourOfficials.png";
import PassGen from "./images/passgen.png";
import WorkDay from "./images/workday.png";
import EmployeeTracker from "./images/EmployeeTracker.png";
import ExpressNoteTaker from "./images/ExpressNoteTakerSS.png";


function PortfolioCard(props) {
  return (
    <div>
      <div className="col-sm-8" id="portfolioContainer">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col mb-4">
            <div className="card" id="dailyHomepage">
              <img src={HomepageImage} className="card-img-top" alt="Daily Homepage" />
              <div className="card-body">
                <h5 className="card-title">Daily Homepage</h5>
                <p className="card-text">User Story: <br />
                  AS A busy person <br />
                  I WANT to be able to quickly see important information about my day <br />
                  SO THAT I can keep up-to-date with current events and plan my day efficiently.</p>
                <p className="card-text"> Technologies Used: <br />
                  HTML <br />
                  CSS <br />
                  jQuery <br />
                  JavaScript
                            </p>
                <a href="https://jcw2865.github.io/Daily-Homepage/" target="_blank" class="card-link">View
                                Live Site</a>
                <a href="https://github.com/jcw2865/Daily-Homepage" target="_blank" class="card-link">View
                                GitHub Repo</a>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card" id="electedOfficials">
              <img src={YourOfficials} className="card-img-top" alt="Daily Homepage" />
              <div className="card-body">
                <h5 className="card-title">Elected Officials</h5>
                <p className="card-text">User Story: <br />
                  AS A a person with interest in politics <br />
                  I WANT to be able to quickly see who my elected officials are <br />
                  SO THAT I can keep up to date with the political climate.</p>
                <p class="card-text"> Technologies Used: <br />
                  HTML <br />
                  CSS <br />
                  jQuery <br />
                  JavaScript <br />
                  Node.js <br />
                  MySQL <br />
                </p>
                <a href="https://quiet-meadow-10109.herokuapp.com/" target="_blank" className="card-link">View
                                Live Site</a>
                <a href="https://github.com/Phoenix-99hp/Project-2" target="_blank" className="card-link">View
                                GitHub Repo</a>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card" id="passwordGenerator">
              <img src={PassGen} className="card-img-top" alt="Password Generator" />
              <div className="card-body">
                <h5 className="card-title">Password Generator</h5>
                <p className="card-text">User Story: <br />
                  AS AN employee with access to sensitive data <br />
                  I WANT to randomly generate a password that meets certain criteria <br />
                  SO THAT I can create a strong password that provides greater security</p>
                <p className="card-text"> Technologies Used: <br />
                  HTML <br />
                  CSS <br />
                  jQuery <br />
                  JavaScript</p>
                <a href="https://jcw2865.github.io/Password-Generator/" target="_blank"
                  className="card-link">View Live Site</a>
                <a href="https://github.com/jcw2865/Password-Generator" target="_blank"
                  class="card-link">View GitHub
                                Repo</a>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card" id="dayPlanner">
              <img src={WorkDay} className="card-img-top" alt="Day Planner" />
              <div className="card-body">
                <h5 className="card-title">Day Planner</h5>
                <p className="card-text">User Story: <br />
                  AS AN employee with a busy schedule <br />
                  I WANT to add important events to a daily planner <br />
                  SO THAT I can manage my time effectively</p>
                <p className="card-text"> Technologies Used: <br />
                  HTML <br />
                  CSS <br />
                  jQuery <br />
                  JavaScript</p>
                <a href="https://jcw2865.github.io/Day-Planner/" target="_blank" className="card-link">View Live
                                Site</a>
                <a href="https://github.com/jcw2865/Day-Planner" target="_blank" className="card-link">View
                    GitHub
                                Repo</a>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card" id="employeeTracker">
              <img src={EmployeeTracker} className="card-img-top" alt="MySQL Employee Tracker" />
              <div className="card-body">
                <h5 className="card-title">MySQL Employee Tracker</h5>
                <p className="card-text">User Story: <br />
                  AS A business owner <br />
                  I WANT to be able to view and manage the departments, roles, and employees in my company
                                <br />
                  SO THAT I can organize and plan my business</p>
                <p className="card-text"> Technologies Used: <br />
                  HTML <br />
                  CSS <br />
                  jQuery <br />
                  JavaScript <br />
                  Node.js <br />
                  MySQL <br />
                </p>
                <a href="https://github.com/jcw2865/Employee-Tracker" target="_blank" className="card-link">View
                    GitHub
                                Repo</a>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card" id="expressNoteTaker">
              <img src={ExpressNoteTaker} className="card-img-top" alt="Express Note Taker" />
              <div className="card-body">
                <h5 className="card-title">Express Note Taker</h5>
                <p className="card-text">User Story: <br />
                  AS A user, I want to be able to write and save notes <br />
                  I WANT to be able to delete notes I've written before <br />
                  SO THAT I can organize my thoughts and keep track of tasks I need to complete
                            </p>
                <p className="card-text"> Technologies Used: <br />
                  HTML <br />
                  CSS <br />
                  jQuery <br />
                  JavaScript <br />
                  Node.js <br />
                  Express.js <br />
                </p>
                <a href="https://shrouded-chamber-01100.herokuapp.com/" target="_blank"
                  className="card-link">View Live Site</a>
                <a href="https://github.com/jcw2865/Express-Note-Taker" target="_blank"
                  className="card-link">View GitHub
                                Repo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
