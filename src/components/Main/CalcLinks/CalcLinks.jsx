import { Link } from 'react-router-dom';

const CalcLinks = () => {
  return (
    <div className="main-calc">
      <ul className="main-calc-list">
        <Link to="/calc-of-bvr/kish" className="main-calc-cell">
          Расчет БВР
        </Link>
        <Link to="/calc-of-airing" className="main-calc-cell">
          Расчет вентиляции
        </Link>
        <Link to="/all-calculations" className="main-calc-cell">
          Таблица результатов
        </Link>
      </ul>
    </div>
  );
};

export default CalcLinks;
