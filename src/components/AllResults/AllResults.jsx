import './AllResults.sass';

const AllResults = () => {
  return (
    <section className="results">
      <div className="results-container">
        <h2 className="results-title">Таблица всех расчетов</h2>
        <div className="results-table">
          <ul className="results-list">
            <li className="results-cell">Результаты</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AllResults;
