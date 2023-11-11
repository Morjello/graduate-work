import React, { useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';

const QuantityOfSpurs = () => {
  const [quantityOfSpurs, setQuantityOfSpurs] = useState({
    q: '',
    S: '',
    p: '',
    d: '',
    a: '',
  });

  const [quantityOfSpursResult, setQuantityOfSpursResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setQuantityOfSpurs({ ...quantityOfSpurs, [name]: value });
  };

  const calcDepthOfSpurs = ({ q, S, p, d, a }) => {
    const res = (1, 27 * q * S) / (p * d, a);
    return res;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setQuantityOfSpursResult(calcDepthOfSpurs(quantityOfSpurs));
  };

  return (
    <DivisionForm
      id="7"
      title="Определение количества шпуров"
      name="quantityOfSpurs"
      onSubmit={handleSubmitForm}
      result={quantityOfSpursResult}
    >
      <div className="division-label">
        <h3 className="division-text">Удельный расход ВВ, кг/м3</h3>
        <input
          value={quantityOfSpurs.q}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="q"
          name="q"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">Площадь в проходке, м2</h3>
        <input
          value={quantityOfSpurs.S}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="S"
          name="S"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">Плотность ВВ в патроне, кг/м3</h3>
        <input
          value={quantityOfSpurs.p}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="p"
          name="p"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">Диаметр шпура, м</h3>
        <input
          value={quantityOfSpurs.m}
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
        <h3 className="division-text">Коэффицент заряжания шпуров</h3>
        <input
          value={quantityOfSpurs.a}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="a"
          name="a"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};

export default QuantityOfSpurs;
