import "./home.css";
import { useHistory } from "react-router";

const Home = () => {
  let history = useHistory();
  return (
    <div>
      <div className="preview">
        <div className="preview-div">
          <div className="head">
            <h4 className="preview-head">LET YOU BE SERENE</h4>
          </div>
          <p className="preview-para">Get the right support for your mind</p>
        </div>
      </div>
      <div className="div-form-box">
        <div className="div-form-box1">
          <h2 className="div-form-box-head">
            Take a mental health test today!
            <br /> Know how you feel.
          </h2>
        </div>
        <div className="div-form-box1">
          <button
            onClick={() => {
              history.push("/form");
            }}
            className="test-report-button"
          >
            Get Your Test Report
          </button>
        </div>
      </div>
      <div>
        <div className="div-form-box2">
          <h1>
            A complete mental health guide{" "}
            <span className="div-form-box2-heading">
              <hr />
            </span>
          </h1>
        </div>
        <div className="home-main-component">
          <div className="home-card">
            <img src="advice1.jpg" style={{ width: "100% " }}></img>
            <div class="home-container">
              <div className="home-main-div"></div>
            </div>
          </div>
          <div className="home-card">
            <img src="advice2.jpg" style={{ width: "100% " }}></img>
            <div class="home-container">
              <div className="home-main-div"></div>
            </div>
          </div>
          <div className="home-card">
            <img src="advice3.jpg" style={{ width: "100% " }}></img>
            <div class="home-container">
              <div className="home-main-div"></div>
            </div>
          </div>
          <div className="home-card">
            <img src="advice4.jpg" style={{ width: "100% " }}></img>
            <div class="home-container">
              <div className="home-main-div"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-blogs">
        <div className="div-form-box3">
          <h1>
            Your Blog place
            <span className="div-form-box2-heading">
              <hr className="hr-id" />
            </span>
          </h1>
        </div>
        <div className="div-form-box-3-para">
          <p className="blog-para">
            Join the community and Read blogs related to Mental Health &
            Wellness
          </p>
        </div>
        <div className="home-main-component">
          <div className="home-card-2">
            <img
              src="blog1.jpg"
              style={{ width: "100% ", height: "80%" }}
            ></img>
            <div class="home-container-2">
              <p>5 Popular Culture Characters and their Mental illness</p>
              <div className="home-blog-main-div">
                <button
                  onClick={() => {
                    history.push("/blog1");
                  }}
                  className="blog2-btn"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="home-card-2">
            <img
              src="img-blog.jpg"
              style={{ width: "100% ", height: "80%" }}
            ></img>
            <div class="home-container-2">
              <p> Diagnosing And Managing Autism Spectrum Disorder</p>
              <div className="home-blog-main-div">
                <button
                  onClick={() => {
                    history.push("/blog2");
                  }}
                  className="blog2-btn"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="home-card-3">
            <img
              src="stress.jpg"
              style={{ width: "100% ", height: "80%" }}
            ></img>
            <div class="home-container-3">
              <p>Attention Deficit Hyperactive Diorder- ADHD</p>
              <div className="home-blog-main-div">
                <button
                  onClick={() => {
                    history.push("/blog3");
                  }}
                  className="blog3-btn"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Home;
