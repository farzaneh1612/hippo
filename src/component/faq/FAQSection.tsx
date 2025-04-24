import React, { useState } from "react";
import "./FAQSection.css";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "On which blockchain is the HPO token issued?",
    answer:
      "The HPO token is issued on the [insert blockchain name] blockchain, ensuring secure and transparent transactions. It adheres to the [insert token standard, e.g., ERC–20 or BEP–20] protocol, making it compatible with various wallets and decentralized applications (DApps).",
  },
  {
    question: "What is the HPO token, and what are its use cases?",
    answer: "Answer coming soon...",
  },
  {
    question: "How can I purchase HPO tokens?",
    answer: "Answer coming soon...",
  },
  {
    question: "Is staking available for HPO tokens?",
    answer: "Answer coming soon...",
  },
  {
    question: "What is the total supply of HPO tokens?",
    answer: "Answer coming soon...",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one opened by default

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
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
    </section>
  );
};

export default FAQSection;
