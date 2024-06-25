// src/components/Header.js
import React from "react";
import { FaArrowLeft, FaArrowRight, FaClock, FaQuestion, FaQuestionCircle, FaSearch } from "react-icons/fa";

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="header">
      <div className="left-arrow">
        {/* <button className="header-button">blue</button> */}
        <FaArrowLeft ></FaArrowLeft>
        <FaArrowRight></FaArrowRight>
        <FaClock ></FaClock> 
      </div>
      <div className="header-text">
      <input
        type="text"
        placeholder="Search Groups"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      </div>
      <div className="search-icon"><FaSearch></FaSearch></div>
      <div className="ques-header">
      <FaQuestionCircle></FaQuestionCircle>
      </div>
      
      
    </div>
  );
};

export default Header;
