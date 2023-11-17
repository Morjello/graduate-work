import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import division from '../../func/division';

const Kzsh = ({ setKzsh, lengthOfSpur }) => {
  const [kzshData, setKzshData] = useState({ length1: '', length2: '' });
  const [kzshResult, setKzshResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setKzshData({ ...kzshData, [name]: value });
  };

  useEffect(() => {
    setKzshData({ ...kzshData }, (kzshData.length2 = lengthOfSpur));
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setKzshResult(division(kzshData.length1, kzshData.length2).toFixed(2));
    setKzsh(division(kzshData.length1, kzshData.length2).toFixed(2));
  };

  return (
    <DivisionForm
      id="3"
      title="Коэффициент заряжания шпуров (КЗШ)"
      name="kzsh"
      onSubmit={handleSubmitForm}
      result={kzshResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          l<sub>зар</sub> – длина заряда, м
        </h3>
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
        <h3 className="division-text">
          l<sub>шп</sub> – длина шпура, м
        </h3>
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
