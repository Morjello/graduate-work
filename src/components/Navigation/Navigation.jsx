import './Navigation.sass';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  return (
    <nav className="navigation">
      <div className="navigation-list">
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-bvr/kish'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-bvr/kish"
        >
          Коэффициент использования шпуров
        </Link>
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-bvr/kki'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-bvr/kki"
        >
          Коэффициент излишка сечения
        </Link>
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-bvr/kzsh'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-bvr/kzsh"
        >
          Коэффициент заряжания шпуров
        </Link>
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-bvr/length-of-spurs'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-bvr/length-of-spurs"
        >
          Определение длины шпуров
        </Link>
        {/* <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-bvr/depth-of-spurs'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-bvr/depth-of-spurs"
        >
          Определение глубины шпуров
        </Link> */}
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-bvr/specific-vv'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-bvr/specific-vv"
        >
          Определение удельного расхода ВВ
        </Link>
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-bvr/spend-vv'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-bvr/spend-vv"
        >
          Теоретический расход ВВ на взрыв
        </Link>
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-bvr/quantity-of-spurs'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-bvr/quantity-of-spurs"
        >
          Определение количества шпуров
        </Link>
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-bvr/vv-in-spurs'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-bvr/vv-in-spurs"
        >
          Средняя величина заряда в шпуре
        </Link>
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-bvr/length-of-zaryad'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-bvr/length-of-zaryad"
        >
          Определение длины зарядов
        </Link>
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-bvr/koeff-of-zaryajaniya'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-bvr/koeff-of-zaryajaniya"
        >
          Коэффициент заряжания (заполнения) шпуров
        </Link>
        <Link
          className={`navigation-cell ${
            location.pathname === '/calc-of-bvr/fact-spend-vv'
              ? 'navigation-cell--active'
              : 'navigation-cell--hiden'
          }`}
          to="/calc-of-bvr/fact-spend-vv"
        >
          Фактический расход ВВ на заходку
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
