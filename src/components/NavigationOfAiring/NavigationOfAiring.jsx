import { Link, useLocation } from 'react-router-dom';

const NavigationOfAiring = () => {
  const location = useLocation();
  return (
    <nav className="navigation">
      <div className="navigation-list">
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-airing/air-of-gas-after-explosion'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-airing/air-of-gas-after-explosion"
        >
          Расход воздуха по газам, образующимся после взрывных работ
        </Link>

        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-airing/leak-of-air'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-airing/leak-of-air"
        >
          Коэффициент утечек воздуха для металлических трубопроводов
        </Link>

        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-airing/air-for-people'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-airing/air-for-people"
        >
          Необходимое количество воздуха по наибольшему числу людей
        </Link>
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-airing/air-of-min-speed'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-airing/air-of-min-speed"
        >
          Количество воздуха по минимальной скорости движения воздуха
        </Link>
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-airing/power-of-fan'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-airing/power-of-fan"
        >
          Требуемая производительность (подача) вентилятора местного
          проветривания
        </Link>
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-airing/depression-of-flexible-pump'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-airing/depression-of-flexible-pump"
        >
          Депрессия вентилятора для гибких трубопроводов
        </Link>
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-airing/depression-of-hard-pump'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-airing/depression-of-hard-pump"
        >
          Депрессия вентилятора для жестких трубопроводов
        </Link>
      </div>
    </nav>
  );
};

export default NavigationOfAiring;
