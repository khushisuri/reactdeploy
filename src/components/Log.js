import byju from "../images/byju.jpg";
import imgg from "../images/unnamed.png";
import disney from "../images/disney.png";
import netflix from "../images/netflixlogo.jpg";

import { Link } from "react-router-dom";

const Log = () => {
  return (
    <>
      <div className="log-top">
        <h1>subspace. </h1>
        <div className="headleft">
          <h3>New to subspace? </h3>
          <Link to="/components/Sign">
            <button>sign up</button>{" "}
          </Link>
        </div>
      </div>

      <div className="log-body">
        <div className="login-left">
          <h2>Log in to Dashboard</h2>
          <label>Your Email </label>
          <input type="text"></input>
          <label>Password </label>
          <input type="text"></input>
          <Link to="/components/Frgot ">
            {" "}
            <p className="forgot-passw"> forgot password ?</p>{" "}
          </Link>
          <Link to="/components/Home ">
            {" "}
            <button type="submit">Log in </button>{" "}
          </Link>
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
    </>
  );
};

export default Log;
