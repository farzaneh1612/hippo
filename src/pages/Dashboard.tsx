import Container from '@mui/material/Container';
import * as React from 'react';
import ResponsiveAppBar from '../component/appBar/ResponsiveAppBar.tsx'
import { Box, styled } from '@mui/material';
import image from "../static/image/BackDashboard.png";
import AppBarDashboard from '../component/appBar/AppBarDashboard.jsx';
import DashboardDatatable from '../component/table/DashboardDatatable.jsx';
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
      </BackgroudImageBox>
      <NavBar/>
</div>
 );
}

export default Dashboard;


const BackgroudImageBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: `url(${image})`,
}));





 