import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <div className="fixd">
        <section className="side-nav">
          <div>
            <h3>SubSpace. </h3>
          </div>
          <div>
            <i className="fas fa-th-large"></i>
            <Link to="./components/Home ">
              <p>Home</p>{" "}
            </Link>
          </div>
          <div>
            <i className="fas fa-arrows-alt-h"></i>
            <Link to="./components/Transactions    ">
              {" "}
              <p>Transactions </p>{" "}
            </Link>
          </div>
          <div>
            <i className="fas fa-location-arrow"></i>
            <p>Subscription Plans</p>
          </div>
          <div>
            <i className="fas fa-check-double"></i>
            <Link to="./components/Settlement ">
              {" "}
              <p>Settlement</p>{" "}
            </Link>
          </div>
          <div>
            <i className="fas fa-exclamation-circle"></i>
            <p>Disputes</p>
          </div>
          <div>
            <i className="fas fa-arrow-circle-left"></i>
            <p>Refunds</p>
          </div>
          <div>
            <i className="fas fa-user-friends"></i>
            <p>Customers</p>
          </div>
          <div>
            <i className="fas fa-divide"></i>
            <p>Offers</p>
          </div>
          <div>
            <i className="fas fa-gift"></i>
            <p>Rewards Ponits</p>
          </div>
          <div>
            <i className="fas fa-user-circle"></i>
            <Link to="/components/MyAccount ">
              {" "}
              <p>My Account</p>{" "}
            </Link>
          </div>
          <div>
            <i className="fas fa-cog"></i>
            <p>settings </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SideNav;
