import React, { useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import division from '../../func/division';

const Kzsh = () => {
  const [kzshData, setKzshData] = useState({ length1: '', length2: '' });
  const [kzshResult, setKzshResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setKzshData({ ...kzshData, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setKzshResult(division(kzshData.length1, kzshData.length2));
  };

  return (
    <DivisionForm
      id="3"
      title="Коэффицент заряжания шпуров (КЗШ)"
      name="kzsh"
      onSubmit={handleSubmitForm}
      result={kzshResult}
    >
      <div className="division-label">
        <h3 className="division-text">Длина заряда, м</h3>
        <input
          value={kzshData.length1}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="length1"
          name="length1"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">Длина шпура, м</h3>
        <input
          value={kzshData.length2}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="length2"
          name="length2"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};
export default Kzsh;
