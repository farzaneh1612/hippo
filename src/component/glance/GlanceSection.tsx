import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GlanceSection.css";

const isMobile = window.innerWidth <= 768;

type GlanceData = {
  price: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
};

const GlanceSection: React.FC = () => {
  const [data, setData] = useState<GlanceData | null>(null);

    const fetchData = () => {
    axios
      .get<GlanceData>("https://api.hippowallet.io/v1/HPO/info")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch HPO data:", err));
  };

  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 3600000); // Fetch every 1 hor

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <section className="glance-section">
      <div className="glance-header">
        {!isMobile && (
          <img
            src={require("../../static/image/logo/Logo.png")}
            alt="Glance Icon"
            className="glance-icon"
          />
        )}
        <h2>HPO at a Glance</h2>
      </div>

      {isMobile ? (
        <div className="price-card">
          <div className="price-header">
            <div className="icon-circle">
              <img src={require("../../static/image/logo/Logo.png")} alt="HPO Icon" />
            </div>
            <div className="current-price">
              <p className="label">Current Price</p>
              <p className="value">USDT {data ? data.price.toFixed(4) : "Loading..."}</p>
            </div>
          </div>

          <hr />

          <div className="metrics">
            <div className="metric">
              <p className="label">Total Supply</p>
              <p className="value">{data ? data.totalSupply.toLocaleString() : "Loading..."}</p>
            </div>
            <div className="metric">
              <p className="label">Circulating Supply</p>
              <p className="value">{data ? data.circulatingSupply.toLocaleString() : "Loading..."}</p>
            </div>
            <div className="metric">
              <p className="label">Max Supply</p>
              <p className="value">{data ? data.maxSupply.toLocaleString() : "Loading..."}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="glance-table">
          <div className="glance-row header">
            {["Current Price", "Total Supply", "Circulating Supply", "Max Supply"].map((label) => (
              <div key={label}>
                <span className="glance-header-title">{label}</span>
              </div>
            ))}
          </div>
          <div className="glance-divider" />
          <div className="glance-row data">
            <div>
              <div className="primary">USDT {data ? data.price.toFixed(4) : "Loading..."}</div>
            </div>
            <div>
              <div className="primary">{data ? data.totalSupply.toLocaleString() : "Loading..."}</div>
            </div>
            <div>
              <div className="primary">{data ? data.circulatingSupply.toLocaleString() : "Loading..."}</div>
            </div>
            <div>
              <div className="primary">{data ? data.maxSupply.toLocaleString() : "Loading..."}</div>
            </div>
          </div>
        </div>
      )}

      <div className="contract-section">
        <h3>Smart Contract</h3>
        <div className="contract-buttons">
          <a
            href="https://bscscan.com/token/0xa0ed3c520dc0632657ad2eaaf19e26c4fd431a84"
            className="contract-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ display: "flex" }}>
              <img src={require("../../static/image/logo/BscScan.png")} className="logo-img" alt="BSC Icon" />
              {isMobile ? (
                <img src={require("../../static/image/Arrow.png")} className="glance-arrow-icon" alt="arrow" />
              ) : (
                <span className="glance-section-logo-title">BSC Scan</span>
              )}
            </div>
            {isMobile ? (
              <span className="glance-section-logo-title">BSC Scan</span>
            ) : (
              <img src={require("../../static/image/Arrow.png")} className="glance-arrow-icon" alt="arrow" />
            )}
          </a>

          <a
            href="https://etherscan.io/token/0xa0ed3c520dc0632657ad2eaaf19e26c4fd431a84"
            className="contract-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ display: "flex" }}>
              <img src={require("../../static/image/logo/Ethereum.png")} className="logo-img" alt="Ether Icon" />
              {isMobile ? (
                <img src={require("../../static/image/Arrow.png")} className="glance-arrow-icon" alt="arrow" />
              ) : (
                <span className="glance-section-logo-title">Ether Scan</span>
              )}
            </div>
            {isMobile ? (
              <span className="glance-section-logo-title">Ether Scan</span>
            ) : (
              <img src={require("../../static/image/Arrow.png")} className="glance-arrow-icon" alt="arrow" />
            )}
          </a>
        </div>
      </div>
    </section>
  );
};

export default GlanceSection;
