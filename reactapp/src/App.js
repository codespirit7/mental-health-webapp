import React, { useEffect, useRef, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import GlobalState from "./contexts/GlobalState";
import Form from "./components/Form";
import Home from "./components/Home";
import Auth from "./components/auth.js";
import Session from "./components/Session";
import Mentor_list from "./components/Mentor_lst.js";
import Chat from "../src/components/Chat";
import Video from "../src/components/Video";
import Report from "../src/components/Report";
import Blog1 from "./components/blogs/Blog1";
import Blog2 from "./components/blogs/Blog2";
import Blog3 from "./components/blogs/Blog3";

import "./App.css";

function App() {
  const [state, setState] = useState(false);

  return (
    <Router className="router">
      <div className="app">
        <div className="nav-bar">
          <ul className="container">
            <li className="main-nav-logo">
              <img src="logo-upbeat.jpg" style={{ width: "100% " }}></img>
            </li>
            <li>
              <Link to="/" className="main-nav">
                Home
              </Link>
            </li>
            <li>
              <Link to="/session" className="main-nav">
                Session
              </Link>
            </li>
            <li>
              <Link to="/mentors" className="main-nav">
                Mentors
              </Link>
            </li>
            <li className="auth-nav">
              <GlobalState.Provider value={[state, setState]}>
                <Auth />
              </GlobalState.Provider>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/session">
            <GlobalState.Provider value={[state, setState]}>
              <Session />
            </GlobalState.Provider>
          </Route>

          <Route path="/chat" component={Chat} />

          <Route path="/form" component={Form} />
          <Route path="/mentors" component={Mentor_list} />

          <Route path="/report" component={Report} />

          <Route path="/blog1" component={Blog1} />

          <Route path="/blog2" component={Blog2} />

          <Route path="/blog3" component={Blog3} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
