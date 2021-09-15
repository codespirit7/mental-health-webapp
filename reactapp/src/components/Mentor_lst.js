import React from "react";
import "./Mentor_lst_style.css";

function Mentor_list() {
  return (
    <div className="mentors_body">
      <div className="mentors-container">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="content">
          <div className="mentors_card">
            <div className="firstinfo">
              <img src="https://i.pinimg.com/564x/f7/4f/fc/f74ffc83bd539179682fb640a34588ba.jpg" />
              <div className="profileinfo">
                <h1>Mentor1</h1>
                <h3>Therapist at AIIMS Delhi</h3>
                <p className="bio">
                  Lived all my life on the top of mount Fuji, learning the way
                  to be a Ninja Dev.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="connect_btn">Connect</button>
        <div className="content">
          <div className="mentors_card">
            <div className="firstinfo">
              <img src="https://randomuser.me/api/portraits/lego/6.jpg" />
              <div className="profileinfo">
                <h1>Mentor1</h1>
                <h3>Therapist at AIIMS Delhi</h3>
                <p className="bio">
                  Lived all my life on the top of mount Fuji, learning the way
                  to be a Ninja Dev.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="connect_btn">Connect</button>
        <div className="content">
          <div className="mentors_card">
            <div className="firstinfo">
              <img src="https://randomuser.me/api/portraits/lego/6.jpg" />
              <div className="profileinfo">
                <h1>Mentor1</h1>
                <h3>Therapist at AIIMS Delhi</h3>
                <p className="bio">
                  Lived all my life on the top of mount Fuji, learning the way
                  to be a Ninja Dev.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="connect_btn">Connect</button>
      </div>
    </div>
  );
}

export default Mentor_list;
