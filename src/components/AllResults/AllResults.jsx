import './AllResults.sass';

const AllResults = ({
  kishResultForLength,
  kki,
  kzsh,
  depthOfSpursRes,
  specificVVRes,
  teorSpendVVOnExplore,
  quantityOfSpursRes,
  allSpurs,
  weigthOfallSpurs,
  lengthOfAllSpurs,
  lengthOfSpur,
  koeffOfZarForRes,
  factSpendVVForRes,
}) => {
  return (
    <section className="results">
      {/* <h2 className="results-title">Таблица всех расчетов</h2> */}
      <table className="results-table">
        <caption className="results-caption">
          Таблица 1 - Результаты всех расчетов
        </caption>
        <tr className="results-cell">
          <th className="results-subtitle">Название</th>
          <th className="results-subtitle">Значение</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Коэффициент использования шпуров:</th>
          <th className="results-text">{kishResultForLength}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Коэффициент излишка сечения:</th>
          <th className="results-text">{kki}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Коэффициент заряжания шпуров:</th>
          <th className="results-text">{kzsh}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Определение глубины шпуров:</th>
          <th className="results-text">{depthOfSpursRes}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Определение удельного расхода ВВ:</th>
          <th className="results-text">{specificVVRes}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Теоретический расход ВВ на взрыв:</th>
          <th className="results-text">{teorSpendVVOnExplore}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Определение количества шпуров:</th>
          <th className="results-text">{quantityOfSpursRes}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Величина заряда во врубовых шпурах:</th>
          <th className="results-text">{allSpurs.vrub}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Величина заряда в отбойных шпурах:</th>
          <th className="results-text">{allSpurs.okont}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Величина заряда в контурных шпурах:</th>
          <th className="results-text">{allSpurs.kontur}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Масса патрона во врубовых шпурах:</th>
          <th className="results-text">{weigthOfallSpurs.vrubWeigth}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Масса патрона в отбойных шпурах:</th>
          <th className="results-text">{weigthOfallSpurs.okontWeigth}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Масса патрона в контурных шпурах:</th>
          <th className="results-text">{weigthOfallSpurs.konturWeigth}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Длина заряда во врубовых шпурах:</th>
          <th className="results-text">{lengthOfAllSpurs.vrub}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Длина заряда в отбойных шпурах:</th>
          <th className="results-text">{lengthOfAllSpurs.okont}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Длина заряда в контурных шпурах:</th>
          <th className="results-text">{lengthOfAllSpurs.kontur}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Длина шпуров:</th>
          <th className="results-text">{lengthOfSpur}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Коэффициент заряжания шпуров:</th>
          <th className="results-text">{koeffOfZarForRes}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Фактический расход ВВ на заходку:</th>
          <th className="results-text">{factSpendVVForRes}</th>
        </tr>
      </table>
    </section>
  );
};

export default AllResults;
