import React from 'react'
import AppBarDashboard from '../component/appBar/AppBarDashboard.tsx';
import { Box, styled } from '@mui/material';
import NavBar from '../component/appBar/NavBar.tsx';
import image from "../static/image/BackDashboard.png";
import StakeForm from '../component/exchange/StakeForm.tsx';
import TabBarMobile from '../component/appBar/TabBarMobile.tsx';


const { innerHeight: height, innerWidth:width } = window;
const isMobile = width <= 768;


export default function Stake() {
  return (
   <div>             <BackgroudImageBox>
    
  
   
         <AppBarDashboard/>            
         {isMobile && <TabBarMobile/>}

            <div style={{marginTop:'72px'}}/>          

            <StakeForm/>
            </BackgroudImageBox>
                  <NavBar/>
            
         </div>
  )
}

const BackgroudImageBox = styled(Box)(({ theme }) => ({
    /* Full height */
    height: height,

    /* Center and scale the image nicely */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage:`url(${image})`
    

  }));