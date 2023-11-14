import React, { useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';

const SpecificVV = ({ setSpecificVVRes }) => {
  const [specificVV, setSpecificVV] = useState({
    q1: '',
    f0: '',
    v: '',
    e: '',
  });
  const [specificVVResult, setSpecificVVResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setSpecificVV({ ...specificVV, [name]: value });
  };

  const calcSpecificVV = ({ q1, f0, v, e }) => {
    const res = q1 * f0 * v * e;
    return res;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSpecificVVResult(calcSpecificVV(specificVV));
    setSpecificVVRes(calcSpecificVV(specificVV));
  };

  return (
    <DivisionForm
      id="5"
      title="Определение удельного расхода ВВ"
      name="specificVV"
      onSubmit={handleSubmitForm}
      result={specificVVResult}
    >
      <div className="division-label">
        <h3 className="division-text">Удельный расход, кг/м3</h3>
        <input
          value={specificVV.q1}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="q1"
          name="q1"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">Коэффицент крепости пород</h3>
        <input
          value={specificVV.f0}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="f0"
          name="f0"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">Коэффициент зажима</h3>
        <input
          value={specificVV.v}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="v"
          name="v"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">Коэффицент работоспособности ВВ</h3>
        <input
          value={specificVV.e}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="e"
          name="e"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};

export default SpecificVV;
