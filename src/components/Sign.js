import byju from "../images/byju.jpg";
import imgg from "../images/unnamed.png";
import disney from "../images/disney.png";
import netflix from "../images/netflixlogo.jpg";
import { Link } from "react-router-dom";

const Sign = () => {
  return (
    <>
      <div className="sign-up ">
        <div className="log-top">
          <h1>subspace. </h1>
          <div className="headleft">
            <h3>already a user? </h3>
            <Link to="/components">
              <button>log in</button>
            </Link>
          </div>
        </div>

        <div className="log-body">
          <div className="login-left">
            <div className=" signup-form ">
              <h1>Create an account</h1>
              <div>
                <label>Enter Moblie </label>
              </div>
              <input type="text"></input>
              <div>
                <label> Enter Email </label>
              </div>
              <input type="text"></input>
              <div>
                <label>Enter password </label>
                <i class="fas fa-eye"></i>
              </div>
              <input type="text"></input>
              <div>
                <label>Enter password </label>
                <i class="fas fa-eye"></i>
              </div>
              <input type="text"></input>

              <div className="age-verify">
                <i class="fas fa-check-square"></i>
                <p className=" age">
                  {" "}
                  i hereby confirm i am above 18 years old
                </p>
              </div>
              <Link to="/components/Home">
                {" "}
                <button type="submit">Verify OTP</button>
              </Link>
              <p className="line">
                {" "}
                By creating this account, you agree to our
                <span>Privacy Policy </span> and <span> Terms of Use </span>
              </p>
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

export default Sign;
