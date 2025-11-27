import React from 'react';

interface Item {
  name: string;
  price: string;
}

interface CardProps {
  title: string;
  items: Item[];
}

const Card: React.FC<CardProps> = ({ title, items }) => (
  <div className='card'>
    <h3>{title}</h3>
    <ul>
      {items.map(({ name, price }) => (
        <li key={name}>
          <span>{name}</span>
          <span>{price}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Card;
