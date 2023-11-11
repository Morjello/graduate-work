import React from 'react';
import './Header.sass';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navigationsPaths = // маршруты для отображения подвала
    location.pathname === '/calc-of-bvr' ||
    location.pathname === '/calc-of-bvr/kish' ||
    location.pathname === '/calc-of-bvr/kki' ||
    location.pathname === '/calc-of-bvr/kzsh' ||
    location.pathname === '/calc-of-bvr/depth-of-spurs' ||
    location.pathname === '/calc-of-bvr/specific-vv' ||
    location.pathname === '/calc-of-bvr/spend-vv' ||
    location.pathname === '/calc-of-bvr/quantity-of-spurs' ||
    location.pathname === '/calc-of-bvr/vv-in-spurs' ||
    location.pathname === '/calc-of-bvr/length-of-zaryad' ||
    location.pathname === '/calc-of-bvr/length-of-spurs';
  return (
    <section className="header">
      <div className="header-nav">
        <Link
          to="/"
          className={`header-link ${
            location.pathname === '/' && 'header-link--active'
          }`}
        >
          Главная
        </Link>
        <Link
          to="/calc-of-bvr"
          className={`header-link ${navigationsPaths && 'header-link--active'}`}
        >
          Параметры буровзрывных работ
        </Link>
        <Link
          to="/calc-of-ventilyaciya"
          className={`header-link ${
            location.pathname === '/calc-of-ventilyaciya' &&
            'header-link--active'
          }`}
        >
          Параметров вентиляции
        </Link>
        <Link
          to="/all-calculations"
          className={`header-link ${
            location.pathname === '/all-calculations' && 'header-link--active'
          }`}
        >
          Резульаты всех расчетов
        </Link>
      </div>
    </section>
  );
};

export default Header;
