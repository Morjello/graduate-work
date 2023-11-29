import './AllResults.sass';

const AllResults = ({ bvrData, airirngData }) => {
  return (
    <section className="results">
      {/* начало таблицы бвр */}
      <table className="results-table">
        <caption className="results-caption">
          Таблица 1 - Результаты буровзрывных работ
        </caption>
        <tr className="results-cell">
          <th className="results-subtitle">Название</th>
          <th className="results-subtitle">Значение</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Коэффициент использования шпуров:</th>
          <th className="results-text">{bvrData.kishResultForLength}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Коэффициент излишка сечения:</th>
          <th className="results-text">{bvrData.kki}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Коэффициент заряжания шпуров:</th>
          <th className="results-text">{bvrData.kzsh}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Длина шпуров:</th>
          <th className="results-text">
            {bvrData.lengthOfSpur.length >= 1
              ? bvrData.lengthOfSpur + ' (м)'
              : ''}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Средняя глубина шпуров:</th>
          <th className="results-text">{bvrData.averageDepthOfSpursForRes}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Удельный расход ВВ:</th>
          <th className="results-text">
            {bvrData.specificVVRes.length >= 1
              ? +bvrData.specificVVRes + ' (кг/м3)'
              : ''}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Теоретический расход ВВ:</th>
          <th className="results-text">
            {bvrData.teorSpendVVOnExplore.length >= 1
              ? bvrData.teorSpendVVOnExplore + ' (кг)'
              : ''}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Количество шпуров:</th>
          <th className="results-text">
            {bvrData.quantityOfSpursRes.length >= 1
              ? bvrData.quantityOfSpursRes + ' (шп)'
              : ''}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Заряд во врубовых шпурах:</th>
          <th className="results-text">
            {bvrData.allSpurs.vrub.length >= 1
              ? bvrData.allSpurs.vrub + ' кг'
              : ''}{' '}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Заряд в отбойных шпурах:</th>
          <th className="results-text">
            {bvrData.allSpurs.okont.length >= 1
              ? bvrData.allSpurs.okont + ' кг'
              : ''}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Заряд в контурных шпурах:</th>
          <th className="results-text">
            {bvrData.allSpurs.kontur.length >= 1
              ? bvrData.allSpurs.kontur + ' кг'
              : ''}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Масса патрона во врубовых шпурах:</th>
          <th className="results-text">
            {bvrData.weigthOfallSpurs.vrubWeigth}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Масса патрона в отбойных шпурах:</th>
          <th className="results-text">
            {bvrData.weigthOfallSpurs.okontWeigth}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Масса патрона в контурных шпурах:</th>
          <th className="results-text">
            {bvrData.weigthOfallSpurs.konturWeigth}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Длина заряда во врубовых шпурах:</th>
          <th className="results-text">{bvrData.lengthOfAllSpurs.vrub}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Длина заряда в отбойных шпурах:</th>
          <th className="results-text">{bvrData.lengthOfAllSpurs.okont}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Длина заряда в контурных шпурах:</th>
          <th className="results-text">{bvrData.lengthOfAllSpurs.kontur}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">
            Коэффициент заряжания (заполнения) шпуров:
          </th>
          <th className="results-text">{bvrData.koeffOfZarForRes}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Фактический расход ВВ на заходку:</th>
          <th className="results-text">{bvrData.factSpendVVForRes}</th>
        </tr>
      </table>
      <table className="results-table">
        {/* начало таблицы показателей */}
        <caption className="results-caption">Таблица 2 - Показатели</caption>
        <tr className="results-cell">
          <th className="results-subtitle">Название</th>
          <th className="results-subtitle">Значение</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Диаметр патрона ВВ:</th>
          <th className="results-text">200 мм</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Расход электродетонаторов:</th>
          <th className="results-text">1</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Расход волновода ДИН-Ш, ИСКРА-Ш:</th>
          <th className="results-text">
            {bvrData.quantityOfSpursRes.length >= 1
              ? bvrData.quantityOfSpursRes
              : ''}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Расход ПДМ-17Ш за цикл:</th>
          <th className="results-text">
            {bvrData.quantityOfSpursRes.length >= 1
              ? bvrData.quantityOfSpursRes - 6
              : ''}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Общее количество ДШ:</th>
          <th className="results-text">3 м</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Общее количество ВП:</th>
          <th className="results-text">50 м</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Уходка забоя за цикл:</th>
          <th className="results-text">{bvrData.ouputOfOreForRes}</th>
        </tr>
      </table>
      <table className="results-table">
        {/* начало таблицы констант */}
        <caption className="results-caption">
          Таблица 3 - Используемые ВВ и средства инициирования
        </caption>
        <tr className="results-cell">
          <th className="results-subtitle">Название</th>
          <th className="results-subtitle">Значение</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Тип ВВ:</th>
          <th className="results-text">Гранулит РП</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Тип ВВ (пром. детонатор):</th>
          <th className="results-text">Пентолит</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Тип ВВ (патрон боевик):</th>
          <th className="results-text">Аммонит 6ЖВ</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Тип зарядчика:</th>
          <th className="results-text">ЗП-2</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Источник тока:</th>
          <th className="results-text">СКИ-2500К, ИПН-2000К</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Способ взрывания:</th>
          <th className="results-text">Электрический с прим. ДИН-Ш, ИСКРА-Ш</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Способ инициирования:</th>
          <th className="results-text">Обратный</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">Способ заряжания:</th>
          <th className="results-text">Механизированный, ручной</th>
        </tr>
      </table>
      {/* <table className="results-table" > 
        <caption className="results-caption">
          Таблица 2 - Результаты вентиляции
        </caption>
        <tr className="results-cell">
          <th className="results-subtitle">Название</th>
          <th className="results-subtitle">Значение</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">
            Расход воздуха по газам, образующимся после взрывных работ:
          </th>
          <th className="results-text">
            {airirngData.airOfGasForRes.length >= 1
              ? airirngData.airOfGasForRes + '( м3/мин)'
              : ''}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">
            Коэффициент утечек воздуха для металлических трубопроводов:
          </th>
          <th className="results-text">{airirngData.leakOfAirForRes}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">
            Необходимое количество воздуха по наибольшему числу людей:
          </th>
          <th className="results-text">{airirngData.airForPeopleForRes}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">
            Количество воздуха по минимальной скорости движения воздуха:
          </th>
          <th className="results-text">
            {airirngData.airingOfMinSpeedForRes.length >= 1
              ? airirngData.airingOfMinSpeedForRes + ' (м3/мин)'
              : ''}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">
            Требуемая производительность (подача) вентилятора местного
            проветривания:
          </th>
          <th className="results-text">{airirngData.powerOfFanForRes}</th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">
            Депрессия вентилятора для гибких трубопроводов:
          </th>
          <th className="results-text">
            {airirngData.depressionOfFlexiblePumpForRes}
          </th>
        </tr>
        <tr className="results-cell">
          <th className="results-text">
            Депрессия вентилятора для жестких трубопроводов:
          </th>
          <th className="results-text">
            {airirngData.depressionOfHardPumpForRes}
          </th>
        </tr>
      </table> */}
    </section>
  );
};

export default AllResults;
