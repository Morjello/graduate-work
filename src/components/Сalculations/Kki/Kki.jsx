import React, { useState } from 'react';

import DivisionForm from '../../DivisionForm/DivisionForm';
import division from '../../func/division';

const Kki = ({ setKki }) => {
  const [kkiData, setKkiData] = useState({ square1: '', square2: '' });
  const [kkiResult, setKkiResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setKkiData({ ...kkiData, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setKkiResult(division(kkiData.square1, kkiData.square2));
    setKki(division(kkiData.square1, kkiData.square2));
  };
  return (
    <DivisionForm
      id="1"
      title="Коэффициент излишка сечения (ККИ)"
      name="kki"
      onSubmit={handleSubmitForm}
      result={kkiResult}
    >
      <div className="division-label">
        <h3 className="division-text">Площадь выработки в проходке, м2</h3>
        <input
          value={kkiData.square1}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="square1"
          name="square1"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">Площадь выработки в черне, м2</h3>
        <input
          value={kkiData.depth}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="square2"
          name="square2"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};

export default Kki;
