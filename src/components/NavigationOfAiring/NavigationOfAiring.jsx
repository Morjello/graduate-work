import { Link, useLocation } from 'react-router-dom';

const NavigationOfAiring = () => {
  const location = useLocation();
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li
          className={`navigation-cell ${
            location.pathname === '/calc-of-airing/air-of-gas-after-explosion'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
        >
          <Link
            className="navigation-link"
            to="/calc-of-airing/air-of-gas-after-explosion"
          >
            Расход воздуха по газам, образующимся после взрывных работ
          </Link>
        </li>
        <li
          className={`navigation-cell ${
            location.pathname === '/calc-of-airing/leak-of-air'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
        >
          <Link className="navigation-link" to="/calc-of-airing/leak-of-air">
            Коэффициент утечек воздуха для металлических трубопроводов
          </Link>
        </li>
        <li
          className={`navigation-cell ${
            location.pathname === '/calc-of-airing/air-for-people'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
        >
          <Link className="navigation-link" to="/calc-of-airing/air-for-people">
            Расчет необходимого количества воздуха по наибольшему числу людей
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationOfAiring;
