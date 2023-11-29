import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';

const AverageDepthOfSpurs = ({
  lengthOfSpursForDepth,
  setAverageDepthOfSpursForRes,
}) => {
  const [averageDepthOfSpurs, setAverageDepthOfSpurs] = useState({
    L: '',
    LengthOfSpurs: '',
  });

  const [averageDepthOfSpursResult, setAverageDepthOfSpursResult] =
    useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setAverageDepthOfSpurs({ ...averageDepthOfSpurs, [name]: value });
  };

  const calcDepthOfSpurs = () => {
    return (averageDepthOfSpurs.L / averageDepthOfSpurs.LengthOfSpurs).toFixed(
      2
    );
  };

  useEffect(() => {
    setAverageDepthOfSpurs(
      { ...averageDepthOfSpurs },
      (averageDepthOfSpurs.LengthOfSpurs = lengthOfSpursForDepth)
    );
  }, [lengthOfSpursForDepth]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setAverageDepthOfSpursResult(calcDepthOfSpurs() + ' м');
    setAverageDepthOfSpursForRes(calcDepthOfSpurs() + ' м');
  };

  return (
    <DivisionForm
      id="33"
      title="Определение средней глубины шпуров"
      name="averageDepthOfSpurs"
      onSubmit={handleSubmitForm}
      result={averageDepthOfSpursResult}
    >
      <div className="division-label">
        <h3 className="division-text">L – длина проходимой выработки, м</h3>
        <input
          value={averageDepthOfSpurs.L}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="L"
          name="L"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          L<sub>шп</sub> – длина шпуров
        </h3>
        <input
          value={averageDepthOfSpurs.LengthOfSpurs}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="LengthOfSpurs"
          name="LengthOfSpurs"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};

export default AverageDepthOfSpurs;
