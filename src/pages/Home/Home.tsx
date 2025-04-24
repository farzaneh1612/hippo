
import React from 'react'
import HeroSection from '../../component/heroSection/HeroSection.tsx';
import AssetsSection from '../../component/assetsSection/AssetsSection.tsx';
import StakingSection from '../../component/stakingSection/StakingSection.tsx';
import NetworkSection from '../../component/networkSection/NetworkSection.tsx';
// import AtAGlanceSection from '../../components/AtAGlanceSection';
// import FAQSection from '../../components/FAQSection';
import './Home.css';
import GlanceSection from '../../component/glance/GlanceSection.tsx';
import FAQSection from '../../component/faq/FAQSection.tsx';
import NavBar from '../../component/appBar/NavBar.tsx';
import image from "../../static/image/BackgroundIllustrations.png";
import { Box, styled, Container  } from '@mui/material';

const {  innerWidth:width,innerHeight: height } = window;

const Home = () => {
  return (
    <div className="Home">
      <HeroSection />
      <BackgroudImageBox sx={{height: { xs: ' 60vh', backgroundSize: {xs:'cover'}, width:{xs:width}}}}>

      <AssetsSection />
      <StakingSection />      
      <NetworkSection />
      <GlanceSection/>
      <FAQSection/>
      <NavBar/>
      </BackgroudImageBox>
      
    </div>
  );
};

export default Home;

const BackgroudImageBox = styled(Box)(({ theme }) => ({
  /* Full height */
  height: height,

  /* Center and scale the image nicely */
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage:`url(${image})`
  

}));