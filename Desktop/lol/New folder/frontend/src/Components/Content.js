import React, { useContext } from "react";
import "../Styles/Content.css";
import group from "../Resources/Vector.svg";
import leave from "../Resources/leave.png";
import like from "../Resources/like.png";
import img1 from "../Resources/img1.png";
import img2 from "../Resources/img2.png";
import profile1 from "../Resources/profile.png";
import profile2 from "../Resources/profile2.png";
import profile4 from "../Resources/profile4.png";
import profile5 from "../Resources/profile5.png";
import profile6 from "../Resources/profile6.png";
import profile7 from "../Resources/profile7.png";
import LoginContext from "../Context/LoginContext";
import Post from "./Post";

function Content() {
  const context = useContext(LoginContext);
  const { show } = context;

  const setActive = (e) => {
    const allTabs = document.querySelectorAll(".tab-section");
    allTabs.forEach((e) => {
      e.classList.remove("active-tab");
    });
    e.target.classList.add("active-tab");
  };

  const followed = (e) => {
    e.target.classList.toggle("btn-followed");
    e.target.textContent = "Followed";
  };
  return (
    <div className="container w-75 px-0 d-flex flex-column">
      <div className="heading-small my-4 d-flex justify-content-between align-items-center">
        <h2>Posts(368)</h2>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle btn-post"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter: All
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tabs-container d-flex justify-content-between">
        <div className="tab d-flex justify-content-between">
          <span
            id="1"
            className="tab-section active-tab"
            onClick={(e) => {
              setActive(e);
            }}
          >
            All Posts(32)
          </span>
          <span
            id="2"
            className="tab-section"
            onClick={(e) => {
              setActive(e);
            }}
          >
            Article
          </span>
          <span
            id="3"
            className="tab-section"
            onClick={(e) => {
              setActive(e);
            }}
          >
            Event
          </span>
          <span
            id="4"
            className="tab-section"
            onClick={(e) => {
              setActive(e);
            }}
          >
            Education
          </span>
          <span
            id="5"
            className="tab-section"
            onClick={(e) => {
              setActive(e);
            }}
          >
            Job
          </span>
        </div>
        <div className="buttons w-25">
          <div className="btn-group mx-3 float-end">
            <button
              type="button"
              className="btn btn-post dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Write a Post
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  Edit
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Option 3
                </a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className={`btn btn-join ${
              show === false ? "show" : "hide"
            } float-end`}
          >
            <img src={group} alt="vector" /> Join Group
          </button>
          <button
            type="button"
            className={`btn btn-leave ${show === true ? "show" : "hide"}`}
          >
            <img src={leave} alt="vector" /> Leave Group
          </button>
        </div>
      </div>

      <div className="content d-flex my-4 justify-content-between">
        <div className="post-container">
          <Post
            image={img1}
            badge="✍️ Article"
            profile={profile1}
            view="1.4k views"
            name="Sarthak Kamra"
            title="What if famous brands had regular fonts? Meet RegulaBrands!"
            text="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            content="post"
          />
          <Post
            image={img2}
            badge="🔬️ Education"
            profile={profile2}
            view="1.4k views"
            name="Sarah West"
            title="Tax Benefits for Investment under National Pension Scheme launched by Government"
            text="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            content="post"
          />
          <Post
            image={img2}
            badge="🔬️ Education"
            profile={profile2}
            view="1.4k views"
            name="Sarah West"
            title="Finance & Investment Elite Social Mixer @Lujiazui"
            text="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            content="timeline"
            location="Ahmedabad, India"
            date="Fri, 12 Oct, 2018"
          />
          <Post
            image={img2}
            badge="💼️ Job"
            profile={profile2}
            view="1.4k views"
            name="Sarah West"
            title="Software Development"
            text="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            content="job"
            location="Noida, India"
            company="Innovaccer Analytics Private Ltd."
          />
        </div>

        <div className="finder-container w-25">
          <div className="location-edit d-flex align-items-center justify-content-between my-4">
            <div className="location mb-2 d-flex align-items-center">
              <i className="bi bi-geo-alt me-2"></i>
              <input
                type="text"
                class="form-control text-date"
                aria-describedby="basic-addon1"
                placeholder="Enter your location"
                defaultValue="Ahmedabad, India"
              />
            </div>
            <i className="bi bi-pencil-fill mb-2"></i>
          </div>

          <div className="warning">
            <i className="bi bi-exclamation-circle me-1"></i>
            <span>
              Your location will help us serve better and extend a personalised
              experience.
            </span>
          </div>

          <div className={`recommend-groups ${show ? "show" : "hide"} mt-5`}>
            <h5 className="recommend-head ms-2">
              {" "}
              <img src={like} alt="" className="me-2" />
              RECOMMENDED GROUPS
            </h5>

            <div
              className={`footer-card d-flex align-items-center m-4 justify-content-between ${
                show ? "show" : "hide"
              }`}
            >
              <div className="profile">
                <img src={profile4} alt="" className="" />
                <span className="profile-name ms-3">Leisure</span>
              </div>

              <button
                type="button"
                class="btn btn-post rounded-pill btn-sm px-3"
                onClick={(e) => {
                  followed(e);
                }}
              >
                Follow
              </button>
            </div>
            <div
              className={`footer-card d-flex align-items-center m-4 justify-content-between ${
                show ? "show" : "hide"
              }`}
            >
              <div className="profile">
                <img src={profile6} alt="" className="" />
                <span className="profile-name ms-3">Activism</span>
              </div>

              <button
                type="button"
                class="btn btn-post rounded-pill btn-sm px-3"
                onClick={(e) => {
                  followed(e);
                }}
              >
                Follow
              </button>
            </div>
            <div
              className={`footer-card d-flex align-items-center m-4 justify-content-between ${
                show ? "show" : "hide"
              }`}
            >
              <div className="profile">
                <img src={profile5} alt="" className="" />
                <span className="profile-name ms-3">MBA</span>
              </div>

              <button
                type="button"
                class="btn btn-post rounded-pill btn-sm px-3"
                onClick={(e) => {
                  followed(e);
                }}
              >
                Follow
              </button>
            </div>
            <div
              className={`footer-card d-flex align-items-center m-4 justify-content-between ${
                show ? "show" : "hide"
              }`}
            >
              <div className="profile">
                <img src={profile7} alt="" className="" />
                <span className="profile-name ms-3">Philosophy</span>
              </div>

              <button
                type="button"
                class="btn btn-post rounded-pill btn-sm px-3"
                onClick={(e) => {
                  followed(e);
                }}
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
