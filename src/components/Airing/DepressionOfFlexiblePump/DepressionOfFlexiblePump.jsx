import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import '../../DivisionForm/DivisionForm.sass';

const DepressionOfFlexiblePump = ({
  setDepressionOfFlexiblePumpForRes,
  rtr,
}) => {
  const [depressionOfFlexiblePump, setDepressionOfFlexiblePump] = useState({
    Rtr: '',
    Qv: '',
  });
  const [depressionOfFlexiblePumpResult, setDepressionOfFlexiblePumpResult] =
    useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setDepressionOfFlexiblePump({ ...depressionOfFlexiblePump, [name]: value });
  };

  const calcDepressionOfFlexiblePump = () => {
    return (
      (
        1.2 *
        depressionOfFlexiblePump.Rtr *
        depressionOfFlexiblePump.Qv
      ).toFixed(1) + ' (Па)'
    );
  };

  useEffect(() => {
    setDepressionOfFlexiblePump(
      { ...depressionOfFlexiblePump },
      (depressionOfFlexiblePump.Rtr = rtr)
    );
  }, [rtr]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setDepressionOfFlexiblePumpResult(calcDepressionOfFlexiblePump());
    setDepressionOfFlexiblePumpForRes(calcDepressionOfFlexiblePump());
  };

  return (
    <DivisionForm
      id="23"
      title="Депрессия вентилятора для гибких трубопроводов"
      name="DepressionOfFlexiblePump"
      onSubmit={handleSubmitForm}
      result={depressionOfFlexiblePumpResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          R<sub>тр</sub> – аэродинамическое сопротивление трубопровода, H * c
          <sup>2</sup> / м<sup>8</sup>
        </h3>
        <input
          value={depressionOfFlexiblePump.Rtr}
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
          Q<sub>в</sub> - подача вентилятора местного проветривания, м
          <sup>3</sup>/мин
        </h3>
        <input
          value={depressionOfFlexiblePump.Qv}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Qv"
          name="Qv"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};

export default DepressionOfFlexiblePump;
