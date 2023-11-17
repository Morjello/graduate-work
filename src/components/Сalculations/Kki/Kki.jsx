import React, { useState } from 'react';

import DivisionForm from '../../DivisionForm/DivisionForm';
import division from '../../func/division';

const Kki = ({ setKki, setSpr, setSvch }) => {
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
    setKkiResult(division(kkiData.square1, kkiData.square2).toFixed(2));
    setKki(division(kkiData.square1, kkiData.square2).toFixed(2));
    setSpr(kkiData.square1);
    setSvch(kkiData.square2);
  };
  return (
    <DivisionForm
      id="2"
      title="Коэффициент излишка сечения (ККИ)"
      name="kki"
      onSubmit={handleSubmitForm}
      result={kkiResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          S<sub>пр</sub> – площадь выработки в проходке, м<sup>2</sup>
        </h3>
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
        <h3 className="division-text">
          S<sub>вч</sub> – площадь выработки вчерне, м<sup>2</sup>
        </h3>
        <input
          value={kkiData.square2}
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
