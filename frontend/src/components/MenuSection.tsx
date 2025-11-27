import React from 'react';
import Card from './Card';

const MenuSection: React.FC = () => {
  const coffee = [
    { name: 'Эспрессо', price: '150₽' },
    { name: 'Капучино', price: '200₽' },
    { name: 'Латте', price: '220₽' }
  ];

  const desserts = [
    { name: 'Чизкейк', price: '250₽' },
    { name: 'Макарон', price: '90₽' },
    { name: 'Тирамису', price: '270₽' }
  ];

  const drinks = [
    { name: 'Чай', price: '120₽' },
    { name: 'Матча', price: '240₽' },
    { name: 'Лимонад', price: '180₽' }
  ];

  return (
    <section id="menu">
      <h2 style={{ textAlign: 'center', marginBottom: 40 }}>Меню</h2>
      <div className="menu-grid">
        <Card title="Кофе" items={coffee} />
        <Card title="Десерты" items={desserts} />
        <Card title="Напитки" items={drinks} />
      </div>
    </section>
  );
};

export default MenuSection;
