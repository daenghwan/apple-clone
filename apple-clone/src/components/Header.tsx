import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Apple 로고 이미지: public/assets 폴더에 위치 */}
        <img src="/assets/SeoYeon Logo.png" alt="Self Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#iphone">iPhone</a></li>
          <li><a href="#mac">Mac</a></li>
          <li><a href="#ipad">iPad</a></li>
          <li><a href="#watch">Watch</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
