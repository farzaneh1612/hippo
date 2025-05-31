import React, { useState } from "react";
import "./ResponsiveAppBar.css";
import logo from "../../static/image/logo/Logo.png"; // adjust path as needed
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "../menu/Menu.tsx";
import { useNavigate } from "react-router";
const isMobile = window.innerWidth <= 768;


const ResponsiveAppBar: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

    let navigate = useNavigate();
  
      const navigatetoNavBar = (hrefLink:string) => {
          navigate(hrefLink);
        };

  return (
    <nav className="navbar">
      
      <div className="navbar-left">
        <img src={logo} alt="HPO Logo" className="navbar-logo" />
        {!isMobile && 
        <span className="navbar-brand">HPOtoken</span>
        }
        
      </div>
      {isMobile ? 
      <button                 
      onClick={()=>navigatetoNavBar('/stake')}
      className="navbar-button-start">
        <span>Start To Stake/Bridge</span>
        </button> 
        :
      <div className="navbar-center">
        <a href="#about">About HPO</a>
        <a href="#staking">Staking</a>
        <a href="#buy">Buy</a>
      </div>
      }
      {isMobile ? <>
      <MenuIcon  className="navbar-menu" onClick={toggleDrawer} /> 
      <div className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`} onClick={toggleDrawer}></div>

        {/* Drawer Content */}
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}><Menu/></div> </>
      :
      <div className="navbar-right">
        <button onClick={()=>navigatetoNavBar('/stake')} className="stake-button">Start To Stake / Bridge</button>
      </div>
      }
    </nav>
  );
};

export default ResponsiveAppBar;
