import React from "react";
import "./TabBarMobile.css";
import { useNavigate, useLocation } from "react-router";

export default function TabBarMobile() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Stake', href: '/stake' },
    { title: 'Bridge', href: '/bridge' }
  ];

  const activeTabIndex = tabs.findIndex(
    (tab) => tab.href.toLowerCase() === location.pathname.toLowerCase()
  );

  const handleTabClick = (href: string) => {
    navigate(href);
  };

  return (
    <div className="tabbar">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tabbar-button ${activeTabIndex === index ? "active" : ""}`}
          onClick={() => handleTabClick(tab.href)}
        >
          <span>{tab.title}</span>
        </button>
      ))}
    </div>
  );
}
