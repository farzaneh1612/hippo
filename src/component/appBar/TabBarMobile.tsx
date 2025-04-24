import React, { useState } from "react";
import "./TabBarMobile.css";
import { useNavigate } from "react-router";

export default function TabBarMobile() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [{title:'Dashboard', href:'/dashboard'}, {title:'Stake', href:'/stake'}, {title:'Bridge',href:'/bridge'}];
  let navigate = useNavigate();

  const navigatetoNavBar = (hrefLink:string, index:number) => {
    setActiveTab(index)
      navigate(hrefLink);
    };
  return (
    <div className="tabbar">
      {tabs.map((tab,index) => (
        <button
          key={index}
          className={`tabbar-button ${activeTab === index ? "active" : ""}`}
          onClick={() => navigatetoNavBar(tab.href,index)}
        >
          <span>{tab.title}</span>
        </button>
      ))}
    </div>
  );
}
