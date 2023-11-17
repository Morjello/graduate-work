import React, { useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';

const DepthOfSpurs = ({ setdepthOfSpursRes }) => {
  const [depthOfSpurs, setDepthOfSpurs] = useState({
    speed: '',
    time: '',
    b: '',
    m: '',
    n: '',
  });

  const [depthOfSpursResult, setDepthOfSpursResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setDepthOfSpurs({ ...depthOfSpurs, [name]: value });
  };

  const calcDepthOfSpurs = ({ speed, time, b, m, n }) => {
    const res = ((speed * time) / (b * m * n)) * 1.1;
    return res.toFixed(2) + ' (м)';
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setDepthOfSpursResult(calcDepthOfSpurs(depthOfSpurs));
    setdepthOfSpursRes(calcDepthOfSpurs(depthOfSpurs));
  };

  return (
    <DivisionForm
      id="4"
      title="Определение глубины шпуров"
      name="depthOfSpurs"
      onSubmit={handleSubmitForm}
      result={depthOfSpursResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          V - скорость проведения выработки, м/мес
        </h3>
        <input
          value={depthOfSpurs.speed}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="speed"
          name="speed"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          Т<sub>ц</sub> – продолжительность цикла
        </h3>
        <input
          value={depthOfSpurs.time}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="time"
          name="time"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">в – количество смен в сутки</h3>
        <input
          value={depthOfSpurs.b}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="b"
          name="b"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          m – количество рабочих дней для проходческой бригады в месяц
        </h3>
        <input
          value={depthOfSpurs.m}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="m"
          name="m"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">Коэффициент использования шпуров</h3>
        <input
          value={depthOfSpurs.n}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="n"
          name="n"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};

export default DepthOfSpurs;
