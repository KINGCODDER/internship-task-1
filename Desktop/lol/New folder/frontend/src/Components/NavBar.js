import React, { useContext } from "react";
import logo from "../Resources/whole.png";
import "../Styles/NavBar.css";
import Popup from "./Popup";
import LoginContext from "../Context/LoginContext";
import profilePic from "../Resources/profile3.png";

function NavBar() {
  const context = useContext(LoginContext);
  const { show } = context;

  
  return (
    <>
      
      <div className="navbar-container d-flex">
        <div className="container-fluid navbar">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Header" />
          </a>

          <div className="searchbar w-25">
            <div className="input-group">
              <span
                className="input-group-text border-0 search-box-custom"
                id="basic-addon1"
              >
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 search-box-custom"
                placeholder="Search for your favorite groups in ATG"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className="login-signup dropdown">
            <span
              className={`login-signup-text dropdown-toggle ${
                show ? "hide" : "show"
              }`}
            >
              Create Account.
              <button
                type="button"
                className="login-signup-link btn btn-link ps-0 "
                id="myInput"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                It's Free!
              </button>
            </span>

            <div
              className={`footer-card d-flex align-items-center justify-content-between dropdown-toggle ${
                show ? "show" : "hide"
              }`}
            >
              <div className="profile">
                <img src={profilePic} alt="" className="" />
                <span className="profile-name ms-3">Siddharth Goyal</span>
              </div>
            </div>

            <Popup />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
