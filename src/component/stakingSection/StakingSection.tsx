// src/components/StakingSection.tsx
import React from "react";
import "./StakingSection.css";
import { useNavigate } from "react-router";

const isMobile = window.innerWidth <= 768;

const stakingPlans = [
  { plan: "1–Month", network: "Ethereum & BSC", apy: "6%" },
  { plan: "3–Month", network: "BSC Only", apy: "20%" },
  { plan: "6–Month", network: "BSC Only", apy: "45%" },
  { plan: "12–Month", network: "BSC Only", apy: "100%" },
];

const StakingSection: React.FC = () => {
  let navigate = useNavigate();

  const navigatetoNavBar = (hrefLink: string) => {
    navigate(hrefLink);
  };

  return (
    <section className="staking-section">
      <h2 className="staking-section-h2">Stake HPO & Earn Up to 100% APY</h2>
      <span className="staking-description">
        Make your HPO tokens work for you with staking rewards of up to 100%
        APY. HPO token offers <br /> a secure, flexible, and high–yield staking
        program, allowing you to earn passive income effortlessly
        <br /> while keeping full control over your assets
      </span>
      <p className="staking-subtitle">
        Choose the staking plan that fits your strategy:
      </p>
      {isMobile ? (
        <>
          <div className="staking-cards">
            {stakingPlans.map((plan, index) => (
              <div className="staking-card" key={index}>
                <div className="staking-info">
                  <div>
                    <div className="label">Staking Plan</div>
                    <div className="value">{plan.plan}</div>
                  </div>
                  <div>
                    <div className="label">Network</div>
                    <div className="value">{plan.network}</div>
                  </div>
                  <div>
                    <div className="label">APY</div>
                    <div className="value">{plan.apy}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="staking-table">
          <div className="staking-table-header">
            <span className="staking-title-header">Staking Plan</span>
            <span className="staking-title-header">Network</span>
            <span className="staking-title-header">APY</span>
          </div>

          {stakingPlans.map((plan, index) => (
            <div key={index} className="staking-table-row">
              <span className="staking-title-row">{plan.plan}</span>
              <span className="staking-title-row">{plan.network}</span>
              <span className="staking-title-row">{plan.apy}</span>
            </div>
          ))}
        </div>
      )}
      <span className="staking-note">
        With multi–chain support on Ethereum and BSC, HPO staking provides a
        profitable and seamless way <br /> to grow your wealth. Simply choose
        your preferred plan, stake your HPO, and start earning passive rewards
        today.
      </span>

      <h3 className="staking-call">
        Stake now and unlock the full potential of your HPO tokens!
      </h3>

      <button
        onClick={() => navigatetoNavBar("/stake")}
        className="staking-button"
      >
        <span className="staking-button-title">Start Staking</span>
      </button>
    </section>
  );
};

export default StakingSection;
