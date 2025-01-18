import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <div className="sidebar-items">
          <img src="/table.svg" alt="" />
        </div>
        <div className="sidebar-items">
          <img src="/puzzl.svg" alt="" />
        </div>
        <div className="sidebar-items">
          <img src="/circle.svg" alt="" />
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-items">
          <img src="/card.svg" alt="" />
        </div>
        <div className="sidebar-items">
          <img src="/db.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
