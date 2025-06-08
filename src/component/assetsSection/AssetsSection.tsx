// src/components/FeaturesSection.tsx
import React from 'react';
import './AssetsSection.css';
import CheckIcon from '@mui/icons-material/Check';

const { innerWidth: width } = window;

const isMobile = width <= 768;


const AssetsSection = () => {
  return (
    <section className="assetss">
    <div className="assets-content">
     
      <div className="assets-text">
        <h1 className='assets-h1'>HPO, Hippo Wallet’s Multi-Chain Utility Token for Security and Growth</h1>
         {isMobile ? <div className="assets-image">
        <img src={require('../../static/image/hourseImage.png')} alt="Hippo Wallet Illustration" />
      </div>
      : null}
      <p className='paragraph'>
          HPO is the secure and rewarding utility token powering the Hippo Wallet ecosystem. Designed with next–generation
          blockchain technology, HPO ensures seamless transactions, staking rewards, and interoperability across multiple
          networks. As a multi–chain compatible asset, HPO is available on both Binance Smart Chain (BSC) and Ethereum,
          allowing users to transfer and trade effortlessly across major blockchain ecosystems.
        </p>
        <ul className="assets-benefits">
          <div style={{display:'flex'}}><CheckIcon fontColor={"#4AB1B7"} fontSize="small" /> 
          <span className='check-text'>Multi–Chain Support – BSC & Ethereum</span></div>
          <div style={{display:'flex'}}><CheckIcon fontColor={"#4AB1B7"} fontSize="small"/> <span className='check-text'> HPO Bridge – Cross–Chain Transfers</span></div>
          <div style={{display:'flex'}}><CheckIcon fontColor={"#4AB1B7"} fontSize="small"/> <span className='check-text'>Earn Rewards – Up to 100% APY</span></div>
          <div style={{display:'flex'}}><CheckIcon fontColor={"#4AB1B7"} fontSize="small"/> <span className='check-text'>Seamless Transactions – Fast & Secure</span></div>
          <div style={{display:'flex'}}><CheckIcon fontColor={"#4AB1B7"} fontSize="small"/> <span className='check-text'>Listed on Top Exchanges – PancakeSwap, LBank & more</span></div>
        </ul>
      
        <div className="assets-buttons">
         <a
            href="https://hippowallet.io/"
            target="_blank"
            rel="noopener noreferrer" className="assets-button-primary"> <span className='assets-button-primary-title'>Download HippoWallet</span></a>
           <a
            href="https://cdn.hpotoken.io/HpoWhitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer" className="assets-button-secondary"><span className='assets-button-secondary-title'>Download Whitepaper</span></a>
        </div>
      </div>
      {!isMobile &&
      <div className="assets-image">
        <img src={require('../../static/image/hourseImage.png')} alt="Hippo Wallet Illustration" />
      </div>}
    </div>
  </section>
  );
};

export default AssetsSection;
