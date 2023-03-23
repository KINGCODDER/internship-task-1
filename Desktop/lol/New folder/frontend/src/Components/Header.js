import React, { useContext } from "react";
import "../Styles/Header.css";
import PopupMobile from "./PopupMobile";
import LoginContext from "../Context/LoginContext";

function Header() {
  const context = useContext(LoginContext);
  const { show } = context;
  return (
    <>
      <div className="header w-100">
        <div className="nav-small d-flex justify-content-between p-4 align-items-center p-2">
          <button type="button" class="btn btn-back">
            <i class="bi bi-arrow-left"></i>
          </button>

          <button
            type="button"
            class="btn btn-outline-join"
            data-bs-toggle="modal"
            data-bs-target="#myModalMobile"
          >
            {show ? "Leave" : "Join"} Group
          </button>

          <PopupMobile />
        </div>
        <div className="header-content">
          <h2 className="heading">Computer Engineering</h2>
          <span className="text">142,765 Computer Engineers follow this</span>
        </div>
      </div>
    </>
  );
}

export default Header;
