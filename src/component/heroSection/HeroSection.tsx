// HeroSection.tsx

import React from 'react';
import './HeroSection.css';
import { useNavigate } from "react-router";

const { innerHeight: height } = window;

interface HeroSectionProps {
  onBuyClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBuyClick }) => {

    let navigate = useNavigate();
  
      const navigatetoNavBar = (hrefLink:string) => {
          navigate(hrefLink);
        };

  return (
    <section style={{ height: height }} className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hodl, Profit & Own Your Future</h1>
        <p className="hero-paragraph">
          HPO is the utility token of Hippo Wallet, designed for security,<br />
          passive income, and financial liberty. Buy and stake HPO to grow your wealth while<br />
          exploring new opportunities across crypto and Web3.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
          <button onClick={()=>navigatetoNavBar('/stake')} className="hero-buttons-primary">
            <span className="hero-buttons-title-primary">Start To Stake/Bridge</span>
          </button>
          <button
            className="hero-buttons-secondary"
            onClick={onBuyClick}
          >
            <span className="hero-buttons-title-secondary">Buy HPO Token</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
