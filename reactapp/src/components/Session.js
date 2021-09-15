import "./session.css";
import GlobalState from "../contexts/GlobalState";
import React, { useState, useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

console.log("hello");

const Session = () => {
  const [state, setState] = useContext(GlobalState);
  let history = useHistory();

  return (
    <div>
      <div className="container-top">
        <img src="group-chat.svg" className="grp-chat-img"></img>
        <div className="grp-chat-para-div">
          <div>
            <h1 className="grp-chat-heading"> Connect with Counselors</h1>
          </div>
          <p className="grp-chat-para">
            <ul>
              <li className="para-list">Get help anytime & anywhere.</li>

              <li className="para-list">
                Communicate with your counselor on our intuitive platform.
              </li>

              <li className="para-list">
                Schedule video sessions, send text messages and do a lot more.
              </li>
              <li className="para-list">
                Your therapist is right by your side, always.
              </li>
              <li className="para-list">Schedule one on one sessions.</li>
            </ul>
          </p>
        </div>
      </div>

      <Router>
        <div className="main-div-session">
          <div className="main-div-head-session">
            <h2 className="main-div-head-session-h2">Connect to the mentors</h2>
          </div>
          {state ? (
            <button
            onClick={() => {
              history.push("/chat");
            }}
            className="btn2"
            >
            Connect
            </button>
          ): <p className="unique_para1">Please login first to avail our chatting section</p>}
        </div>
      </Router>

      <footer className="home-footer">
        <div className="footer-heading">
          <h1>Team Cipher</h1>
          <hr />
        </div>
        <div className="team-name">
          <div>
            <h3 className="mem-name">Ritesh Singh</h3>
          </div>
          <div>
            <h3 className="mem-name">Yash Dubey</h3>
          </div>
          <div>
            <h3 className="mem-name">Rohit Vishwakarma</h3>
          </div>
          <div>
            <h3 className="mem-name">Atishara Shrivastava</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Session;
