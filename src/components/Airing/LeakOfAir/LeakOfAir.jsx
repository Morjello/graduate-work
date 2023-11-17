import React, { useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import '../../DivisionForm/DivisionForm.sass';

const LeakOfAir = ({ setLeakOfAirForRes }) => {
  const [leakOfAir, setLeakOfAir] = useState({
    Kyd: '',
    dtr: '',
    Ltr: '',
    Lzv: '',
    Rtr: '',
    a: '',
  });
  const [leakOfAirResult, setLeakOfAirResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setLeakOfAir({ ...leakOfAir, [name]: value });
  };

  const calcLeakOfAir = () => {
    const firstCalcForRtr = 6.5 * leakOfAir.a * leakOfAir.Ltr;
    const secondCalcForRtr = leakOfAir.dtr ** 5;
    const Rtr = firstCalcForRtr / secondCalcForRtr;
    const squareRoot = (Rtr + 1) ** (1 / 2);
    const multiplicationOfArguments =
      (1 / 3) *
      leakOfAir.Kyd *
      leakOfAir.dtr *
      (leakOfAir.Ltr / leakOfAir.Lzv) *
      squareRoot;
    return (multiplicationOfArguments ** 2).toFixed(2);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setLeakOfAirResult(calcLeakOfAir());
    setLeakOfAirForRes(calcLeakOfAir());
  };

  return (
    <DivisionForm
      id="19"
      title="Коэффициент утечек воздуха для металлических трубопроводов"
      name="leakOfAir"
      onSubmit={handleSubmitForm}
      result={leakOfAirResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          k<sub>уд.ст</sub> – удельный стыковочный коэффициент
          воздухонепроницаемости
        </h3>
        <input
          value={leakOfAir.Kyd}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Kyd"
          name="Kyd"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          d<sub>тр</sub> - диаметр трубы, м
        </h3>
        <input
          value={leakOfAir.dtr}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="dtr"
          name="dtr"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          l<sub>тр</sub> – длина трубопровода, м
        </h3>
        <input
          value={leakOfAir.Ltr}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Ltr"
          name="Ltr"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          l<sub>зв</sub> – длина звена трубопровода, м
        </h3>
        <input
          value={leakOfAir.Lzv}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Lzv"
          name="Lzv"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          R<sub>тр</sub> – аэродинамическое сопротивление трубопровода, H*c
          <sup>2</sup>/м<sup>8</sup>
        </h3>
        <input
          value={leakOfAir.Rtr}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Rtr"
          name="Rtr"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          a - коэффициент аэродинамического сопротивления
        </h3>
        <input
          value={leakOfAir.a}
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

export default LeakOfAir;
