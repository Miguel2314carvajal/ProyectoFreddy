import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <img src="/logo.svg" alt="Logo Principal" className="hero-logo" />
        <h1>Tu Nombre del Proyecto</h1>
        <p className="hero-description">
          La biblioteca para interfaces de usuario web y nativas
        </p>
        <div className="cta-buttons">
          <button className="primary-button">Aprende</button>
          <button className="secondary-button">Referencia API</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
