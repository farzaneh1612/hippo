
import React, { useEffect, useRef } from 'react'
import HeroSection from '../../component/heroSection/HeroSection.tsx';
import AssetsSection from '../../component/assetsSection/AssetsSection.tsx';
import StakingSection from '../../component/stakingSection/StakingSection.tsx';
import NetworkSection from '../../component/networkSection/NetworkSection.tsx';
import GlanceSection from '../../component/glance/GlanceSection.tsx';
import FAQSection from '../../component/faq/FAQSection.tsx';
import NavBar from '../../component/appBar/NavBar.tsx';
import image from "../../static/image/BackgroundIllustrations.png";
import { Box, styled} from '@mui/material';

// import AtAGlanceSection from '../../components/AtAGlanceSection';
// import FAQSection from '../../components/FAQSection';

import './Home.css';
import ResponsiveAppBar from '../../component/appBar/ResponsiveAppBar.tsx';

const {  innerWidth:width,innerHeight: height } = window;

const Home = () => {
  const assetsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // Clean the URL when at top
        window.history.replaceState(null, '', window.location.pathname);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="Home">
      <ResponsiveAppBar /> 
      <HeroSection />
      <BackgroudImageBox sx={{height: { xs: ' 60vh', backgroundSize: {xs:'cover'}, width:{xs:width}}}}>
      <div id="about">
      <AssetsSection />
      </div>
      <div id="staking">
      <StakingSection />   
      </div>
      <div id="buy">   
      <NetworkSection />
      </div>
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