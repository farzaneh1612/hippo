// src/components/HeroSection.tsx
import React from 'react';
import './HeroSection.css';

const { innerWidth: width, innerHeight: height } = window;

const HeroSection = () => {
  return (
    <section style={{height:height}} className="hero">
      <div className="hero-content">
        <h1 className='hero-title'>Hodl, Profit & Own Your Future</h1>
        <p  className="hero-paragraph">HPO is the utility token of Hippo Wallet, designed for security, passive income,
            and financial liberty. Buy and stake HPO to grow your wealth while exploring 
            new opportunities across crypto and Web3.</p>
        <div style={{display:'flex', justifyContent:'center', gap:16}}>
          <button className='hero-buttons-primary'><span className='hero-buttons-title-primary'>Start To Stake/Bridge</span></button>
          <button className='hero-buttons-secondary'><span className='hero-buttons-title-secondary'>Buy HPO Token</span></button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
