import Container from '@mui/material/Container';
import * as React from 'react';
import ResponsiveAppBar from '../component/appBar/ResponsiveAppBar.tsx'
import { Box, styled } from '@mui/material';
import image from "../static/image/BackDashboard.png";
import AppBarDashboard from '../component/appBar/AppBarDashboard.tsx';
import DashboardDatatable from '../component/table/DashboardDatatable.tsx';
import NavBar from '../component/appBar/NavBar.tsx';
import TabBarMobile from '../component/appBar/TabBarMobile.tsx';


const { innerWidth: width, innerHeight: height } = window;

const isMobile = width <= 768;


function Dashboard() {

  return (
    <div>      

      <AppBarDashboard/>
      <BackgroudImageBox>
      {isMobile && <TabBarMobile/>}


        <DashboardDatatable/>
        {/* <div style={{ display: "flex",
  width: "1440px",
  padding: "152px 64px 96px 64px",
  justifyContent: "center",
  alignItems: "center",background: "var(--Primary-800, #294640)"}}></div> */}
      </BackgroudImageBox>
      <NavBar/>
</div>
 );
}

export default Dashboard;


const BackgroudImageBox = styled(Box)(({ theme }) => ({
    /* Full height */
    height: 'auto',

    /* Center and scale the image nicely */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage:`url(${image})`
    

  }));

 