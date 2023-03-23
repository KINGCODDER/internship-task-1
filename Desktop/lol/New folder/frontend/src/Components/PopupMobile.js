import React, { useContext } from "react";
import formImage from "../Resources/form-image.png";
import facebook from "../Resources/facebook.png";
import google from "../Resources/google.png";
import "../Styles/Popup.css";
import LoginContext from "../Context/LoginContext";

function PopupMobile() {
  const context = useContext(LoginContext);
  const { handleLogin } = context;
  return (
    <>
      <div
        className="modal"
        id="myModalMobile2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm ">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <span className="modal-title fs-5 views" id="exampleModalLabel">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </span>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="bi bi-x-circle-fill"></i>
              </button>
            </div>
            <div className="modal-body d-flex flex-column p-4">
              <div className="popup-header">
                <h4 className="popup-heading mt-2 d-inline-block float-start ">
                  Create Account
                </h4>
                <span className="mt-2 d-flex align-items-center float-end">
                  {" "}
                  Don’t have an account yet?{" "}
                  <button
                    type="button"
                    className="login-signup-link btn btn-link ps-0 "
                    id="myInput"
                    data-bs-toggle="modal"
                    data-bs-target="#myModalMobile"
                  >
                    Create new for free!
                  </button>{" "}
                </span>
              </div>
              <div className="form-container d-flex mt-4">
                <form action="#" className="w-100 me-4">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>

                  <button
                    type="submit "
                    className="btn btn-primary w-100 rounded-pill my-3"
                    onClick={handleLogin}
                    data-bs-dismiss="modal"
                  >
                    Sign In
                  </button>

                  <button
                    type="button"
                    class="btn btn-outline-signup w-100 mt-2"
                  >
                    <img
                      src={facebook}
                      alt="facebook"
                      className="me-2"
                      onClick={handleLogin}
                      data-bs-dismiss="modal"
                    />
                    Sign in with Facebook
                  </button>

                  <button
                    type="button"
                    class="btn btn-outline-signup w-100 mt-2"
                  >
                    <img
                      src={google}
                      alt="google"
                      className="me-2"
                      onClick={handleLogin}
                      data-bs-dismiss="modal"
                    />
                    Sign in with Google
                  </button>

                  <a href="/" class="forgot-link w-100 mt-2">
                    Forgot Password ?
                  </a>
                </form>

                <div className="form-image w-100 d-flex flex-column justify-content-between">
                  <img src={formImage} alt="form" />
                  <span className="warning">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal"
        id="myModalMobile"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="bi bi-x-circle-fill"></i>
            </button>
            <div className="modal-header justify-content-center">
              <span className="modal-title fs-5 views" id="exampleModalLabel">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </span>
            </div>
            <div className="modal-body d-flex flex-column p-4">
              <div className="popup-header">
                <h4 className="popup-heading mt-2 d-inline-block float-start ">
                  Create Account
                </h4>
              </div>
              <div className="form-container d-flex mt-4">
                <form action="#" className="w-100 me-4">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      class="form-control"
                    ></input>
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div className="signup d-flex justify-content-between align-items-center">
                    <button
                      type="submit "
                      className="btn btn-login w-100 rounded-pill my-3"
                      onClick={handleLogin}
                      data-bs-dismiss="modal"
                    >
                      Create Account
                    </button>

                    <span className="mt-2 d-flex align-items-center float-end">
                      {" "}
                      <button
                        type="button"
                        className="login-signup-link btn btn-link ps-0 "
                        id="myInput"
                        data-bs-toggle="modal"
                        data-bs-target="#myModalMobile2"
                      >
                        or Sign In
                      </button>{" "}
                    </span>
                  </div>

                  <button
                    type="button"
                    class="btn btn-outline-signup w-100 mt-2"
                  >
                    <img
                      src={facebook}
                      alt="facebook"
                      className="me-2"
                      onClick={handleLogin}
                      data-bs-dismiss="modal"
                    />
                    Sign up with Facebook
                  </button>

                  <button
                    type="button"
                    class="btn btn-outline-signup w-100 mt-2"
                  >
                    <img
                      src={google}
                      alt="google"
                      className="me-2"
                      onClick={handleLogin}
                      data-bs-dismiss="modal"
                    />
                    Sign up with Google
                  </button>
                </form>

                <div className="form-image w-100 d-flex flex-column justify-content-between">
                  <img src={formImage} alt="form" />
                  <span className="warning">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupMobile;
