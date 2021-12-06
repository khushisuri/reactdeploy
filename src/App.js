import "./App.css";
import Home from "./components/Home";
import Log from "./components/Log";
import SideNav from "./components/SideNav";
import Frgot from "./components/Frgot";
import Transactions from "./components/Transactions";
import Sign from "./components/Sign";
import Refund from "./components/Refund";
import Settlement from "./components/Settlement";
import { Route, Routes } from "react-router-dom";
import MyAccount from "./components/MyAccount";
import picc from "./images/lion.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const path = useLocation();
  const nav = useNavigate();
  useEffect(() => {
    if (path.pathname === "/") {
      nav("/components/");
    }
  }, []);
  return (
    <div className="App">
      <SideNav></SideNav>
      <div className="switch">
        <div className="top-nav">
          <p className="dashboard">Dashboard</p>
          <i className="fas fa-search"></i>
          <i className="fas fa-th"></i>
          <div className="notiff">
            <i className="fas fa-bell"></i>
            <p>15</p>
          </div>
          <div className=" lio">
            <img src={picc}></img>
          </div>
          <p className=" grow90">Groww90</p>
        </div>
        <Routes>
          <Route path="/components" element={<Log></Log>} />
          <Route path="/components/Sign" element={<Sign></Sign>} />
          <Route path="/components/Frgot" element={<Frgot></Frgot>} />
          <Route
            path="/components/Transactions"
            element={<Transactions></Transactions>}
          />
          <Route path="/components/Home" element={<Home> </Home>} />
          <Route
            path="/components/MyAccount"
            element={<MyAccount> </MyAccount>}
          />
          <Route path="/components/Refund" element={<Refund> </Refund>} />
          <Route
            path="/components/Settlement"
            element={<Settlement></Settlement>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
