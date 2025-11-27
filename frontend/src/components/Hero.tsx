import React from 'react';

const Hero: React.FC = () => {
  const handleClick = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='home' className='hero flex-center'>
      <div className='hero-content'>
        <h1>Добро пожаловать в Уют</h1>
        <h2>Кофе, десерты и тёплая атмосфера</h2>
        <button className='btn-primary' onClick={handleClick}>
          Посмотреть меню
        </button>
      </div>
    </section>
  );
};

export default Hero;
