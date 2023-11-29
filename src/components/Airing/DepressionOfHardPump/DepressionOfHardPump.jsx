import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import '../../DivisionForm/DivisionForm.sass';

const DepressionOfHardPump = ({
  setDepressionOfHardPumpForRes,
  rtr,
  kyt,
  airingOfMinSpeedForRes,
}) => {
  const [depressionOfHardPump, setDepressionOfHardPump] = useState({
    Rtr: '',
    Kyt: '',
    Qzv: '',
  });
  const [depressionOfHardPumpResult, setDepressionOfHardPumpResult] =
    useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setDepressionOfHardPump({ ...depressionOfHardPump, [name]: value });
  };

  const calcDepressionOfHardPump = () => {
    return (
      (
        1.2 *
        depressionOfHardPump.Rtr *
        depressionOfHardPump.Kyt *
        depressionOfHardPump.Qzv
      ).toFixed(1) + ' (Па)'
    );
  };

  useEffect(() => {
    setDepressionOfHardPump(
      { ...depressionOfHardPump },
      (depressionOfHardPump.Kyt = kyt)
    );
    setDepressionOfHardPump(
      { ...depressionOfHardPump },
      (depressionOfHardPump.Rtr = rtr)
    );
    setDepressionOfHardPump(
      { ...depressionOfHardPump },
      (depressionOfHardPump.Qzv = airingOfMinSpeedForRes)
    );
  }, [airingOfMinSpeedForRes, kyt, rtr]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setDepressionOfHardPumpResult(calcDepressionOfHardPump());
    setDepressionOfHardPumpForRes(calcDepressionOfHardPump());
  };

  return (
    <DivisionForm
      id="24"
      title="Депрессия вентилятора для жестких трубопроводов"
      name="DepressionOfHardPump"
      onSubmit={handleSubmitForm}
      result={depressionOfHardPumpResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          R<sub>тр</sub> – аэродинамическое сопротивление трубопровода, H * c
          <sup>2</sup> / м<sup>8</sup>
        </h3>
        <input
          value={depressionOfHardPump.Rtr}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Rtr"
          name="Rtr"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          k<sub>ут</sub> – коэффициент утечек воздуха
        </h3>
        <input
          value={depressionOfHardPump.Kyt}
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
          Q<sub>зп</sub> - количество воздуха по минимальной скорости движения
          воздуха, м<sup>3</sup>/мин
        </h3>
        <input
          value={depressionOfHardPump.Qzv}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Qzv"
          name="Qzv"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};

export default DepressionOfHardPump;
