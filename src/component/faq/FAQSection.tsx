import React, { useState } from "react";
import "./FAQSection.css";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is HPO Token?",
    answer:"HPO Token is a secure utility token for Hippo Wallet, built on next-generation technology. It supports multiple blockchains, including Binance Smart Chain and Ethereum, providing a versatile and rewarding experience for users."
  },
  {
    question: "How does HPO Token work?",
    answer: "HPO Token powers the Hippo Wallet ecosystem, driving the platform’s products and services. It offers a staking feature that allows users to earn rewards and passive income by staking their tokens on the Hippo Wallet app.",
  },
  {
    question: "What can I do with HPO Token?",
    answer: "HPO Token can be used for staking, receiving rewards, and participating in governance decisions within the Hippo Wallet ecosystem.",
  },
  {
    question: "Is HPO Token compatible with other wallets?",
    answer: "HPO Token is designed to be fully compatible with the Hippo Wallet, and can be stored in wallets that support the Ethereum and compatible blockchains.",
  },
  {
    question: "Can I stake my HPO tokens?",
    answer: "Yes, HPO Staking allows users to stake their tokens for 1-month, 3-month, 6-month, or 12-month periods. Staking offers monthly earnings ranging from 6% to 100% APY, with different staking periods available on Ethereum and BSC networks.",
  },
  {
    question: "Where can I stake HPO tokens?",
    answer: "HPO tokens can be staked in Hippo Wallet on Ethereum and BSC networks. Users can stake their HPO token within the Hippo Wallet app by selecting the staking option from the token management section or through the HPO token staking platform.",  
  },
  {
    question: "What is the HPO Bridge?",
    answer: "The HPO Bridge is a multi-chain feature that allows users to transfer and trade tokens across Ethereum and Binance Smart Chain networks seamlessly. It enhances Hippo Wallet's functionality, providing users access to a wide range of assets and decentralized applications (dApps).",
  },
  {
    question: " Where can I buy HPO Token?",
    answer: "HPO Token is available on popular centralized and decentralized exchanges, including PancakeSwap, SushiSwap, Coinstore, LBank, Bitro and Bitmart.",
  },
  {
    question: " What makes HPO Token unique?",
    answer: "HPO Token stands out due to its multi-blockchain compatibility, the rewarding staking feature, and the HPO Bridge, offering a seamless and versatile experience for managing digital assets and accessing a broad range of dApps and opportunities.",
  },
  {
    question: "Is HPO Token secure?",
    answer: "Yes, HPO Token is backed by a strong technical team and employs advanced security measures. It benefits from ongoing updates and enhancements, ensuring the safety and reliability of the token for its users.",
  },
];


const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const displayedFaqs = showAll ? faqData : faqData.slice(0, 3);

  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-list">
        {displayedFaqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleIndex(index)}>
              <span>{item.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "✕" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {faqData.length > 3 && (
        <div className="faq-toggle">
          <button className="faq-toggle-btn" onClick={() => setShowAll(prev => !prev)}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default FAQSection;
