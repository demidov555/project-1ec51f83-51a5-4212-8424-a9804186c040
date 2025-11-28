import React, { useState, useEffect } from 'react';
import ScrollLink from './ScrollLink';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <div className="logo">Уют</div>
        <nav className="nav">
          <ScrollLink to="hero">Главная</ScrollLink>
          <ScrollLink to="menu">Меню</ScrollLink>
          <ScrollLink to="about">О нас</ScrollLink>
          <ScrollLink to="contacts">Контакты</ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
