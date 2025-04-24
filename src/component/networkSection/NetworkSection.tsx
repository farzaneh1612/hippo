import React from "react";
import "./NetworkSection.css";

const isMobile = window.innerWidth <= 768;

interface Exchange {
  name: string;
  type: "DEX" | "CEX";
  icon: string; // URL or path to icon
  url: string;
}

const exchanges: Exchange[] = [
  { name: "PancakeSwap", type: "DEX", icon: require('../../static/image/logo/pancakeswap-cake-logo.png'), url: "#" },
  { name: "SushiSwap", type: "DEX", icon:require('../../static/image/logo/sushiswap-sushi-logo.png'), url: "#" },
  { name: "LBank", type: "CEX", icon: require('../../static/image/logo/LBank.png'), url: "#" },
  { name: "Coinstore", type: "CEX", icon: require('../../static/image/logo/Coinstore.png'), url: "#" },
  { name: "BitMart", type: "CEX", icon: require('../../static/image/logo/BitMart.png'), url: "#" },
  { name: "Bitrue", type: "CEX", icon: require('../../static/image/logo/Bitrue.png'), url: "#" },
];

const NetworkSection: React.FC = () => {
  const dexes = exchanges.filter((ex) => ex.type === "DEX");
  const cexes = exchanges.filter((ex) => ex.type === "CEX");

  return (
    <section className="exchange-section">
      <h2>Buy &amp; Trade HPO on Leading Crypto Exchanges</h2>
      <p>
        HPO is available on both centralized and decentralized exchanges,
        making it easy to buy, trade, and stake your tokens seamlessly. Whether
        you prefer DEXs for decentralized trading or CEXs for convenience and
        liquidity, HPO is accessible across multiple platforms.
      </p>

      <div className="exchange-group">
        <h4>Available on Decentralized Exchanges (DEXs)</h4>
        <div className="exchange-grid">
          {dexes.map((ex) => (
            <a key={ex.name} className="exchange-card" href={ex.url} target="_blank" rel="noreferrer">
              {isMobile ? <>
              <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
              <img src={ex.icon} alt={ex.name} className="exchange-icon" />
                <img src={require('../../static/image/Arrow.png')} className="external-icon" alt='arrow'/>
              </div>
              <span>{ex.name}</span>
              <img className="deximg" src={require('../../static/image/Dexs.png')} alt='dexs'/>
              </>
               :
               <>
              <img src={ex.icon} alt={ex.name} className="exchange-icon" />
              <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                <span>{ex.name}</span>
                <div style={{display:'flex'}}>               
                  <img className="deximg" src={require('../../static/image/Dexs.png')} alt='dexs'/>
                  <img src={require('../../static/image/Arrow.png')} className="external-icon" alt='arrow'/>
              </div>
              </div>
              </>
            }
            </a>
          ))}
        </div>
      </div>

      <div className="exchange-group">
        <h4>Available on Centralized Exchanges (CEXs)</h4>
        <div className="exchange-grid">
          {cexes.map((ex) => (
            <a key={ex.name} className="exchange-card" href={ex.url} target="_blank" rel="noreferrer">
              {isMobile ? <>
              <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                <img src={ex.icon} alt={ex.name} className="exchange-icon" />
                <img src={require('../../static/image/Arrow.png')} className="external-icon" alt='arrow'/>                
              </div>              
              <span>{ex.name}</span>
              <img className="deximg" src={require('../../static/image/cex.png')} alt='cexs'/>
              </>
              :<>
                <img src={ex.icon} alt={ex.name} className="exchange-icon" />
                <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                <span>{ex.name}</span>
                <div style={{display:'flex'}}>               
                  <img className="deximg" src={require('../../static/image/cex.png')} alt='cexs'/>
                  <img src={require('../../static/image/Arrow.png')} className="external-icon" alt='arrow'/>
                </div>
              </div>
              </>    
}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
