import React from 'react';
import { FaInstagram, FaVk } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer id="contact">
    <div className="flex-center" style={{ flexDirection: 'column' }}>
      <div>г. Москва, ул. Пушкина, 10</div>
      <div>
        Телефон: <a href="tel:+79991234567" style={{ color: '#fff' }}>+7 (999) 123-45-67</a>
      </div>
      <div className="socials">
        <a href="#" aria-label="Instagram" style={{ color: '#fff' }}>
          <FaInstagram size={24} />
        </a>
        <a href="#" aria-label="VK" style={{ color: '#fff' }}>
          <FaVk size={24} />
        </a>
      </div>
      <div style={{ marginTop: 10 }}>© 2025 Уют</div>
    </div>
  </footer>
);

export default Footer;
