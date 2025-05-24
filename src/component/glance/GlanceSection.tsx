import React from "react";
import "./GlanceSection.css";
const isMobile = window.innerWidth <= 768;

type GlanceDataItem = {
  label: string;
  primary: string;
  secondary?: string;
};

const glanceData: GlanceDataItem[] = [
  {
    label: "Current Price",
    primary: "USDT 0.0300",
  },
  {
    label: "Change (24)",
    primary: "USDT 0.0035",
    secondary: "−USDT 0.0035",
  },
  {
    label: "Volume (24)",
    primary: "2.6M",
    secondary: "HIPO 78.97 M",
  },
  {
    label: "Total Supply",
    primary: "2.6M",
    secondary: "HIPO 78.97 M",
  },
  {
    label: "Circulating Supply",
    primary: "2.6M",
    secondary: "HIPO 78.97 M",
  },
];

const GlanceSection: React.FC = () => {
  return (
    <section className="glance-section">
      <div className="glance-header">
        {!isMobile && 
        <img
          src={require('../../static/image/logo/Logo.png')}
          alt="Glance Icon"
          className="glance-icon"
        />
        }
        <h2>HPO at a Glance</h2>
      </div>
      {isMobile ?      
      <div className="price-card">
        <div className="price-header">
          <div className="icon-circle">
            <img src={require('../../static/image/logo/Logo.png')} alt="HPO Icon" />
          </div>
          <div className="current-price">
            <p className="label">Current Price</p>
            <p className="value">USDT 0.0300</p>
          </div>
        </div>

        <hr />

        <div className="metrics">
          <div className="metric">
            <p className="label">Change (24)</p>
            <p className="value">USDT 0.0035</p>
          </div>
          <div className="metric">
            <p className="label">Volume (24)</p>
            <p className="value">2.6M</p>
          </div>
          <div className="metric">
            <p className="label">Total Supply</p>
            <p className="value">USDT 0.0300</p>
          </div>
          <div className="metric">
            <p className="label">Circulating Supply</p>
            <p className="value">USDT 0.0035</p>
          </div>
        </div>
      </div> : 

      <div className="glance-table">
      <div className="glance-row header">
        {glanceData.map((item) => (
          <div  key={item.label}><span className="glance-header-title">{item.label}</span></div>
        ))}
      </div>
      <div className="glance-divider" />
      <div className="glance-row data">
        {glanceData.map((item) => (
          <div key={item.label}>
            <div className="primary">{item.primary}</div>
            {item.secondary && <div className="secondary">{item.secondary}</div>}
          </div>
        ))}
      </div>
    </div>
}

      <div className="contract-section">
        <h3>Smart Contract</h3>
        <div className="contract-buttons">
          <a href="https://bscscan.com/token/0xa0ed3c520dc0632657ad2eaaf19e26c4fd431a84" className="contract-card" target="_blank" rel="noopener noreferrer">
            <div style={{display:'flex'}}>
              <img src={require("../../static/image/logo/BscScan.png")} className="logo-img" alt="BSsonar new Icon" />
              {isMobile ? <img src={require('../../static/image/Arrow.png')} className="glance-arrow-icon" alt='arrow'/>
              :
              <span className="glance-section-logo-title">BSC Scan</span>
              }
            </div>
            {isMobile?               
            <span className="glance-section-logo-title">BSC Scan</span>
            :            
            <img src={require('../../static/image/Arrow.png')} className="glance-arrow-icon" alt='arrow'/>
            }
            </a>
          <a href="https://etherscan.io/token/0xa0ed3c520dc0632657ad2eaaf19e26c4fd431a84" className="contract-card" target="_blank" rel="noopener noreferrer">
            <div style={{display:'flex'}}>
              <img src={require("../../static/image/logo/Ethereum.png")} className="logo-img" alt="Ether Icon" />
              {isMobile ? <img src={require('../../static/image/Arrow.png')} className="glance-arrow-icon" alt='arrow'/>
              :
              <span className="glance-section-logo-title">Ether Scan</span>
              }
             </div>
             {isMobile ?
             <span className="glance-section-logo-title">Ether Scan</span>
            :     
              <img src={require('../../static/image/Arrow.png')} className="glance-arrow-icon" alt='arrow'/>

             }
            </a>
        </div>
      </div>
    </section>
  );
};

export default GlanceSection;
