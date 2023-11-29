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
            В этом проекте вы можете посчитать параметры БВР,<br></br>
            вентиляции и увидеть их в общей таблице
          </p>
          {/* <button className="main-button">Попробовать</button> */}
        </div>
      </div>
      {<Tech />}
      <div className="about">
        <p className="about-text">
          Научно-исследовательская работа на тему:<br></br> &laquo;Оптимизация
          расчета параметров паспорта буровзрывных работ с помощью программного
          обеспечения&raquo;<br></br>Выполнил: студент группы 1181-74 Рогознев
          Д.Д.<br></br>Руководитель: Косарев А.А.
        </p>
      </div>
      {<CalcLinks />}
    </main>
  );
};

export default Main;
