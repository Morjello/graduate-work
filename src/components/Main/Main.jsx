import CalcLinks from './CalcLinks/CalcLinks';
import './Main.sass';
import Tech from './Tech/Tech';

const Main = () => {
  return (
    <main className="main">
      <div className="main-title-box">
        <h1 className="main-title">
          Расчет<br></br> параметров паспорта
          <br></br> буровзрывных работ
        </h1>
        <div className="main-subposition">
          <p className="main-subtitle">
            В этом проекте вы можете посчитать параметры БВР,<br></br>{' '}
            вентиляции и увидеть их в общей таблице
          </p>
          <button className="main-button">Попробовать</button>
        </div>
      </div>
      {<Tech />}
      {<CalcLinks />}
    </main>
  );
};

export default Main;
