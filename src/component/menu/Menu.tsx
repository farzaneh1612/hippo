import React from 'react';
import './Menu.css';

interface MenuProps {
  onClose: () => void;
}
const menuItems = [
  { title: "About Hippo", href: "#about" },
  { title: "Staking", href: "#staking" },
  { title: "Buy", href: "#buy" },
];

const Menu: React.FC<MenuProps> = ({ onClose }) => {
 const scrollToSection = (href: string) => {
  onClose(); 
  setTimeout(() => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 300);
};

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <div className="menu-item" key={index}>
          <button
            onClick={() => scrollToSection(item.href)}
            className="button"
          >
            <span>{item.title}</span>
            <span className="arrow">›</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
