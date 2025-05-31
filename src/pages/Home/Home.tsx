import React, { useEffect, useRef } from "react";
import HeroSection from "../../component/heroSection/HeroSection.tsx";
import AssetsSection from "../../component/assetsSection/AssetsSection.tsx";
import StakingSection from "../../component/stakingSection/StakingSection.tsx";
import NetworkSection from "../../component/networkSection/NetworkSection.tsx";
import GlanceSection from "../../component/glance/GlanceSection.tsx";
import FAQSection from "../../component/faq/FAQSection.tsx";
import NavBar from "../../component/appBar/NavBar.tsx";
import backgroundImage from "../../static/image/BackgroundIllustrations.png";
import { Box, styled } from "@mui/material";

// import AtAGlanceSection from '../../components/AtAGlanceSection';
// import FAQSection from '../../components/FAQSection';

import "./Home.css";
import ResponsiveAppBar from "../../component/appBar/ResponsiveAppBar.tsx";

const Home = () => {
  const buyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBuy = () => {
    buyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Home">
      <ResponsiveAppBar />
      <HeroSection onBuyClick={scrollToBuy} /> {/* pass the scroll handler here */}

      <BackgroundImageWrapper>
        <div id="about">
          <AssetsSection />
        </div>
        <div id="staking">
          <StakingSection />
        </div>
        <div id="buy" ref={buyRef}> {/* attach the ref here */}
          <NetworkSection />
        </div>
        <GlanceSection />
        <FAQSection />
        <Box mt={4}>
          <NavBar />
        </Box>
      </BackgroundImageWrapper>
    </div>
  );
};

export default Home;

// ✅ Styled Box with background image
const BackgroundImageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
}));
