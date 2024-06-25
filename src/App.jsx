// src/App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import GroupList from "./components/GroupList";
import Group from "./components/Group";
import Header from "./components/Header";
import "./App.css";
import { FaHome, FaPlusCircle, FaSlack } from "react-icons/fa";
import {  FaPerson } from "react-icons/fa6";
import { GoKebabHorizontal } from "react-icons/go";

const App = () => {
  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups"));
    if (storedGroups) {
      setGroups(storedGroups);
    }
  }, []);

  const handleLogin = () => {
    // Simulate login process
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="container">
        {/* <h1>Slack Clone App</h1> */}
        <Routes>
          <Route 
            exact 
            path="/" 
            element={
              <LoginComponent onLogin={handleLogin} />
            } 
          />
          <Route path="/register" element={<RegisterComponent />} />
          <Route
            path="/app"
            element={
              isAuthenticated ? (
                <div className="app">
                  <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                  <div className="content">
                    <div className="side-icon">
                      <div className="side-icon-top">
                      <FaSlack></FaSlack>
                      <FaHome></FaHome>
                      <GoKebabHorizontal />
                      </div>
                      <div className="side-icon-bottom">
                      <FaPlusCircle></FaPlusCircle>
                      <FaPerson></FaPerson>
                      </div>
                    </div>
                    <div className="sidebar">
                      <GroupList
                        groups={groups}
                        setGroups={setGroups}
                        setCurrentGroup={setCurrentGroup}
                        searchQuery={searchQuery}
                      />
                    </div>
                    <div className="main">
                      {currentGroup ? (
                        <Group group={currentGroup} groups={groups} setGroups={setGroups} />
                      ) : (
                        <div className="main-div">Please select a group to start messaging</div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
