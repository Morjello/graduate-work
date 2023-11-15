import React, { useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import '../../DivisionForm/DivisionForm.sass';

const PowerOfFan = ({ setPowerOfFanForRes }) => {
  const [powerOfFan, setPowerOfFan] = useState({
    Kyt: '',
    Qzp: '',
  });
  const [powerOfFanResult, setPowerOfFanResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setPowerOfFan({ ...powerOfFan, [name]: value });
  };

  const calcPowerOfFan = () => {
    return powerOfFan.Kyt * powerOfFan.Qzp;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setPowerOfFanResult(calcPowerOfFan());
    setPowerOfFanForRes(calcPowerOfFan());
  };

  return (
    <DivisionForm
      id="22"
      title="Требуемая производительность (подача) вентилятора местного
      проветривания"
      name="powerOfFan"
      onSubmit={handleSubmitForm}
      result={powerOfFanResult}
    >
      <div className="division-label">
        <h3 className="division-text">kут – коэффициент утечек воздуха</h3>
        <input
          value={powerOfFan.Kyt}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Kyt"
          name="Kyt"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          Qз.п. - количества воздуха по минимальной скорости движения воздуха,
          м/с
        </h3>
        <input
          value={powerOfFan.Qzp}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Qzp"
          name="Qzp"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};

export default PowerOfFan;
