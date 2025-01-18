import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-left d-flex">
        <div className="nav-back">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
        <div className="nav-text">Name of the file</div>
      </div>
      <div className="nav-right d-flex">
        <div className="nav-switch d-flex align-items-center justify-content-between">
          <div className="form-check form-switch">
            <input
              className="form-check-input custom-switch"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Auto Save
            </label>
          </div>
          <div className="nav-user">
            <img src="/user.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
