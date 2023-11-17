import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';

const LengthOfSpurs = ({ kishResultForLength, setLengthOfSpur }) => {
  const [lengthOfSpurs, setLengthOfSpurs] = useState({
    speed: '',
    tc: '',
    B: '',
    m: '',
    Nz: '',
    kishOfLength: '',
  });
  const [lengthOfSpursResult, setLengthOfSpursResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setLengthOfSpurs({ ...lengthOfSpurs, [name]: value });
  };

  useEffect(() => {
    setLengthOfSpurs(
      { ...lengthOfSpurs },
      (lengthOfSpurs.kishOfLength = kishResultForLength)
    );
  }, [kishResultForLength]);

  const calcLengthOfSpurs = () => {
    return (
      (lengthOfSpurs.speed * lengthOfSpurs.tc) /
      (lengthOfSpurs.B * lengthOfSpurs.m * lengthOfSpurs.kishOfLength)
    ).toFixed(2);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setLengthOfSpursResult(calcLengthOfSpurs() + ' (м)');
    setLengthOfSpur(calcLengthOfSpurs());
  };

  return (
    <>
      <DivisionForm
        id="13"
        title="Определение длины шпуров"
        name="lengthOfSpurs"
        onSubmit={handleSubmitForm}
        result={lengthOfSpursResult}
      >
        <div className="division-label">
          <h3 className="division-text">
            V - скорость проведения выработки, м/мес
          </h3>
          <input
            value={lengthOfSpurs.speed}
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
            Т<sub>ц</sub> – продолжительность цикла (1-2 смены)
          </h3>
          <input
            value={lengthOfSpurs.tc}
            onChange={handleInputChange}
            type="text"
            className="division-input"
            id="tc"
            name="tc"
            maxLength="200"
            required
          />
        </div>

        <div className="division-label">
          <h3 className="division-text">
            в – количество смен в сутки по проходке выработки
          </h3>
          <input
            value={lengthOfSpurs.B}
            onChange={handleInputChange}
            type="text"
            className="division-input"
            id="B"
            name="B"
            required
          />
        </div>
        <div className="division-label">
          <h3 className="division-text">
            m – количество рабочих дней для проходческой бригады в месяц
          </h3>
          <input
            value={lengthOfSpurs.m}
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
          <h3 className="division-text">Коэффицент использования шпура</h3>
          <input
            value={lengthOfSpurs.kishOfLength}
            onChange={handleInputChange}
            type="text"
            className="division-input"
            id="kishOfLength"
            name="kishOfLength"
            maxLength="200"
            required
          />
        </div>
      </DivisionForm>
    </>
  );
};
export default LengthOfSpurs;
