import byju from "../images/byju.jpg";
import imgg from "../images/unnamed.png";
import disney from "../images/disney.png";
import netflix from "../images/netflixlogo.jpg";

import { Link } from "react-router-dom";

const Frgot = () => {
  return (
    <>
      <div className="forgot ">
        <div className="log-top">
          <h1>subspace. </h1>
          <div className="headleft">
            <h3>already a user? </h3>
            <Link to="/components">
              <button>log in</button>{" "}
            </Link>
          </div>
        </div>

        <div className="log-body">
          <div className="login-left">
            <div className="forgot-form">
              <h1>verify your email </h1>
              <p className="forgot">
                a vertfication has been sent to <p>axf@gmail.com </p>
              </p>
              <h3> Verification </h3>
              <input
                className="input"
                type="text"
                placeholder="6 digit verification code"
              ></input>
              <p className="forgot-code">
                Didnt recieve code?
                <span style={{ color: "blue " }}>Resend it</span>
              </p>
              <Link to="/components/Home  ">
                {" "}
                <button type="submit">Verify Email </button>{" "}
              </Link>
            </div>
          </div>
          <div className="login-right">
            <h3>why to subSpace ? </h3>
            <p>2000+ businesses trust their payments with subSpace </p>
            <div className="img">
              <img src={netflix} alt=""></img>
              <img src={byju} alt=""></img>
              <img src={disney} alt=""></img>
              <img src={imgg} alt=""></img>
              <img src={netflix} alt=""></img>
              <img src={byju} alt=""></img>
              <img src={disney} alt=""></img>
              <img src={imgg} alt=""></img>
              <img src={netflix} alt=""></img>
              <img src={byju} alt=""></img>
              <img src={imgg} alt=""></img>
              <img src={netflix} alt=""></img>
            </div>
            <p className="bottom-line">
              Need help?We are just a click away.<span>Contact Us</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frgot;
