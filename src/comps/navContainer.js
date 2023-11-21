// Sidebar.js
import React, { useState } from "react";
import "./Home.css";
import VendorMaster from "./VendorMaster";
import { Link } from "react-router-dom";
import architect from "../assets/architect.svg"
import contractor from "../assets/contractor.svg"

const Sidebar = () => {
  const data = [
    {
      name: "KYC Update",
      icon: "speed",
      link:"/"
      
    },
    {
      name: "Bank Accounts",
      icon: "speed",
      link:"/bankaccounts"
      
    }, 
    {
      name: "PAN Details",
      icon: "speed",
      link:"/pancarddetails"
      
    },
    {
      name: "Project Master Update",
      icon: "speed",
      link:"/projectupdate"
      
    },
    {
      name: "Financial Progress",
      icon: "speed",
      link:"/financialprogress"
      
    },
    {
      name: "Physical Progress",
      icon: "speed",
      link:"/projectupdation"
      
    },
    {
      name: "Reports",
      icon: "speed",
      link:"/report"
      
    }
  

  ];
  const [selectedNavItem, setSelectedNavItem] = useState(0); // Set to 0 initially

  const handleNavItemClick = (index) => {
    setSelectedNavItem(selectedNavItem === index ? null : index);
  };

  return (
    <div style={{display:"flex",justifyContent:"space-between",flexDirection:"column",width:"fit-content"}}>
<div className="sidebar" style={{width:"100%"}}>
      {data.map((item, index) => (
       
        <div
          key={index}
          className={`nav-item ${selectedNavItem === index ? "active-bx" : ""}`}
        >
          {selectedNavItem === index && <div className="active-box">. </div>}
        

          <div
            className="nav-item-header"
            onClick={() => handleNavItemClick(index)}
          >
              {!data.subNavs && <Link to={item.link} key={index}>
            <div className="alignMenu">
              <span
                className={`material-symbols-rounded ${
                  selectedNavItem === index ? "active" : ""
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`nav-text ${
                  selectedNavItem === index ? "active" : ""
                }`}
              >
                {item.name}
              </span>
            </div>
             </Link >}
            {item.subNavs && (
              <span
                className={`material-symbols-rounded toggle-button ${
                  selectedNavItem === index ? "active" : ""
                }`}
              >
                {selectedNavItem === index ? "expand_less" : "expand_more"}
              </span>
            )}

          </div>
         
          
          {selectedNavItem === index && item.subNavs && (
            <div className="subnav-container">
              {item.subNavs.map((item, subIndex) => (
                <Link to={item.link} key={subIndex}>
                  <div className="subnav-item">{item.name}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      
    </div>
    </div>
    
  );
};
export default Sidebar;

