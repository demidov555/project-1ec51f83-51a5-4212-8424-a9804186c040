import React from 'react';
import './MenuSection.css';

interface Item {
  name: string;
  price: string;
}

const menuData: Record<string, Item[]> = {
  'Кофе': [
    { name: 'Эспрессо', price: '150₽' },
    { name: 'Капучино', price: '200₽' },
    { name: 'Латте', price: '220₽' },
  ],
  'Десерты': [
    { name: 'Чизкейк', price: '250₽' },
    { name: 'Эклер', price: '180₽' },
    { name: 'Тирамису', price: '270₽' },
  ],
  'Напитки': [
    { name: 'Чай', price: '120₽' },
    { name: 'Лимонад', price: '200₽' },
    { name: 'Какао', price: '190₽' },
  ],
};

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2 className="menu__title">Меню</h2>
        <div className="menu__cards">
          {Object.entries(menuData).map(([category, items]) => (
            <div key={category} className="menu__card">
              <h3>{category}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item.name} className="menu__item">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
