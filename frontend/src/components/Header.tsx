import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 'bold' }}>
        Уют
      </div>
      <nav>
        <a href="#home">Главная</a>
        <a href="#menu">Меню</a>
        <a href="#about">О нас</a>
        <a href="#contact">Контакты</a>
      </nav>
    </header>
  );
};

export default Header;
