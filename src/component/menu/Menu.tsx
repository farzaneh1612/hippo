import React from 'react';
import './Menu.css';
import { useNavigate } from "react-router";

const menuItems = [
  {title:"About Hippo", href:'/'},
  {title:"Staking", href:'/stake'},
  {title:"Buy", href:'/'},
];




const Menu = () => {

    let navigate = useNavigate();

    const navigatetoNavBar = (hrefLink:string) => {
    navigate(hrefLink);
  };

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <div className="menu-item" key={index}>
            <button
                key={index}
                onClick={()=>navigatetoNavBar(item.href)}
                className='button'
              >
          <span>{item.title}</span>
          <span className="arrow">›</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
