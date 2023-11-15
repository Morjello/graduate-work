import React from 'react';
import './Header.sass';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navigationsOfBVRPaths = // маршруты для отображения подвала
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
    location.pathname === '/calc-of-bvr/length-of-spurs' ||
    location.pathname === '/calc-of-bvr/koeff-of-zaryajaniya' ||
    location.pathname === '/calc-of-bvr/fact-spend-vv';

  const navigationPathsOfAiring =
    location.pathname === '/calc-of-airing' ||
    location.pathname === '/calc-of-airing/leak-of-air' ||
    location.pathname === '/calc-of-airing/air-for-people' ||
    location.pathname === '/calc-of-airing/air-of-gas-after-explosion';
  return (
    <header className="header">
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
          className={`header-link ${
            navigationsOfBVRPaths && 'header-link--active'
          }`}
        >
          Параметры буровзрывных работ
        </Link>
        <Link
          to="/calc-of-airing"
          className={`header-link ${
            navigationPathsOfAiring && 'header-link--active'
          }`}
        >
          Параметры вентиляции
        </Link>
        <Link
          to="/all-calculations"
          className={`header-link ${
            location.pathname === '/all-calculations' && 'header-link--active'
          }`}
        >
          Результаты расчетов
        </Link>
      </div>
      <div className="header-account">
        <p className="header-account-link">Вход</p>
        <p className="header-account-link">Регистрация</p>
      </div>
    </header>
  );
};

export default Header;
