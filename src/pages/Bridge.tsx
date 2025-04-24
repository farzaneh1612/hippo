import React from 'react'
import AppBarDashboard from '../component/appBar/AppBarDashboard.tsx';
import { Box, styled } from '@mui/material';
import image from "../static/image/BackDashboard.png";
import BridgeForm from '../component/bridge/BridgeForm.tsx';
import NavBar from '../component/appBar/NavBar.tsx';
import TabBarMobile from '../component/appBar/TabBarMobile.tsx';

const {  innerWidth:width } = window;
const isMobile = width <= 768;


export default function Bridge() {
  return (
    <div>         
        <BackgroudImageBox>

         <AppBarDashboard/>      
         {isMobile && <TabBarMobile/>}
            <div style={{marginTop:'72px'}}/>
            <BridgeForm/>
         </BackgroudImageBox>
         <NavBar/>
         
    </div>
  )
}

const BackgroudImageBox = styled(Box)(({ theme }) => ({
    /* Full height */
    height: 'auto',

    /* Center and scale the image nicely */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage:`url(${image})`
    

  }));