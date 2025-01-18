import React from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";

const Searchbar = () => {
  return (
    <div className="searchbar-container d-flex justify-content-between align-items-center">
      <div className="search-left flex-wrap">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="btns-search d-flex justify-content-between align-items-center">
          <div className="search-btn">
            <div className="icon-search">
              <img src="/col.svg" alt="" />
            </div>
            <div className="search-btn-text">1/1 Row</div>
          </div>
          <div className="search-btn">
            <div className="icon-search">
              <img src="/hor.svg" alt="" />
            </div>
            <div className="search-btn-text">3/3 Column</div>
          </div>
          <div className="search-btn">
            <div className="icon-search">
              <img src="/filterr.svg" alt="" />
            </div>
            <div className="search-btn-text">0 Filter</div>
          </div>
          <div className="search-btn">
            <div className="icon-search">
              <img src="/sort.svg" alt="" />
            </div>
            <div className="search-btn-text">Sort</div>
          </div>
        </div>
      </div>
      <div className="search-right">
        <div className="search-btn-box-right d-flex justify-content-between align-items-center">
          <div className="black-search-btn">
            <div>
              <img src="/star.svg" alt="" />
            </div>
            <div>
              <div>Enrich</div>
            </div>
          </div>
          <div className="search-btn-right">
            <div className="icon-search">
              <img src="/share.svg" alt="" />
            </div>
          </div>
          <div className="search-btn-right">
            <div className="icon-search">
              <img src="/down.svg" alt="" />
            </div>
          </div>
          <div className="search-btn-right">
            <div className="icon-search">
              <img src="/del.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
