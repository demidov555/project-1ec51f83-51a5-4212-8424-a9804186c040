import React from 'react';
import './Hero.css';
import ScrollLink from './ScrollLink';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1>Добро пожаловать в Уют</h1>
        <p>Кофе, десерты и тёплая атмосфера</p>
        <ScrollLink to="menu">
          <button className="hero__button">Посмотреть меню</button>
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
