import React from 'react';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="main-navigation">
      <div className="nav-section">
        <h3>Empezar</h3>
        <ul>
          <li><a href="#quick-start">Inicio Rápido</a></li>
          <li><a href="#installation">Instalación</a></li>
          <li><a href="#tutorial">Tutorial</a></li>
        </ul>
      </div>

      <div className="nav-section">
        <h3>Aprende</h3>
        <ul>
          <li><a href="#fundamentals">Fundamentos</a></li>
          <li><a href="#components">Componentes</a></li>
          <li><a href="#hooks">Hooks</a></li>
          <li><a href="#advanced">Temas Avanzados</a></li>
        </ul>
      </div>

      <div className="nav-section">
        <h3>Comunidad</h3>
        <ul>
          <li><a href="#github">GitHub</a></li>
          <li><a href="#discord">Discord</a></li>
          <li><a href="#stackoverflow">Stack Overflow</a></li>
        </ul>
      </div>

      <div className="nav-section">
        <h3>Recursos</h3>
        <ul>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#docs">Documentación</a></li>
          <li><a href="#examples">Ejemplos</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
