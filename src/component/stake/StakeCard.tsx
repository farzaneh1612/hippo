import React from "react";
import "./StakeCard.css";

export default function StakeCard({data}) {
  return (
    <div className="stake-card">
      <div className="stake-card-header">
        <div className="stake-card-title-section">
          <div className="stake-card-number">{data.id}</div>
          <span className="stake-card-title">{data.asset}</span>
        </div>
      
        <div className="stake-card-status"><span className={`status-badge ${data.status === 'Done' ? 'done' : 'in-progress'}`}>
          <span className="dot" /> {data.status}</span></div>
      </div>

      <div className="stake-card-info">
        <div className="stake-card-info-item">
          <div className="stake-card-info-label">Amount</div>
          <div className="stake-card-info-value">{data.amount}</div>
        </div>
        <div className="stake-card-info-item">
          <div className="stake-card-info-label">Plan</div>
          <div className="stake-card-info-value">{data.plan}</div>
        </div>
        <div className="stake-card-info-item">
          <div className="stake-card-info-label">APY</div>
          <div className="stake-card-info-value">{data.apy}</div>
        </div>
        <div className="stake-card-info-item">
          <div className="stake-card-info-label">Release Date</div>
          <div className="stake-card-info-value">{data.releaseDate}</div>
        </div>
      </div>
    </div>
  );
}
