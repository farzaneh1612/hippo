import React from 'react'
import  './AppBar.css'
import { useNavigate } from "react-router";
import { Button } from '@mui/material';

const pages = [{title:'Dashboard', href:'/dashboard'}, {title:'Stake', href:'/stake'}, {title:'Bridge',href:'/bridge'}];

export default function AppBarDashboard() {
      const [selectedPage, setSelectedPage] = React.useState(0);
    
    let navigate = useNavigate();

    const navigatetoNavBar = (hrefLink:string, index:number) => {
        setSelectedPage(index)
        navigate(hrefLink);
      };

  return (
    <div className='container'>
        <div className='logoBox'>
            <img className='logoImage' src={require('../../static/image/logo/Logo.png')} width={'100%'} height={'100%'} alt="back"/>            
            <span className='logoTypography'>HPOtoken</span>
        </div>
        <div className='pageContainer'>
        {pages.map((page, index) => (
              <button
                key={page.title}
                onClick={()=>navigatetoNavBar(page.href,index)}
                className={`button ${selectedPage === index ? 'active' : ''}`}
              >
                <span className='pageTypography'>
                {page.title}
                </span>
              </button>
        ))}
        </div>
        <div className='buttonConected'>
            <span className='buttonText'>Connect to wallet</span>
        </div>

    </div>
  )
}
