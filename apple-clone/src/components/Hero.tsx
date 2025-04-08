import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Apple Clone</h1>
        <p>Experience the sleek design and innovative products.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
