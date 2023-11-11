import React, { useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';

const TeorSpendVV = () => {
  const [spendVV, setSpendVV] = useState({ s: '', l: '' });
  const [spendVVResult, setSpendVVResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setSpendVV({ ...spendVV, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSpendVVResult(spendVV.s * spendVV.l);
  };

  return (
    <DivisionForm
      id="6"
      title="Расход ВВ на взрыв"
      name="spendVV"
      onSubmit={handleSubmitForm}
      result={spendVVResult}
    >
      <div className="division-label">
        <h3 className="division-text">Площадь выработки в черне, м2</h3>
        <input
          value={spendVV.s}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="s"
          name="s"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">Длина шпура, м</h3>
        <input
          value={spendVV.l}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="l"
          name="l"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};
export default TeorSpendVV;
