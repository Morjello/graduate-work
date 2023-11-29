import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import division from '../../func/division';

const LengthOfZaryad = ({ setLengthOfAllSpurs, allSpurs }) => {
  const [lengthOfZaryad, setLengthOfZaryad] = useState({
    pressure: '',
    radius: '',
    vrub: '',
    okont: '',
    kontur: '',
  });
  const [lengthOfZaryadResult, setLengthOfZaryadResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setLengthOfZaryad({ ...lengthOfZaryad, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setLengthOfZaryadResult(
      division(lengthOfZaryad.pressure, lengthOfZaryad.radius).toFixed(2) +
        ' (см)'
    );
    setLengthOfAllSpurs({
      vrub: calcLengthOfZatyad(lengthOfZaryad.vrub),
      okont: calcLengthOfZatyad(lengthOfZaryad.okont),
      kontur: calcLengthOfZatyad(lengthOfZaryad.kontur),
    });
  };

  useEffect(() => {
    setLengthOfZaryad(
      { ...lengthOfZaryad },
      (lengthOfZaryad.vrub = allSpurs.vrub * 1000)
    );
    setLengthOfZaryad(
      { ...lengthOfZaryad },
      (lengthOfZaryad.okont = allSpurs.okont * 1000)
    );
    setLengthOfZaryad(
      { ...lengthOfZaryad },
      (lengthOfZaryad.kontur = allSpurs.kontur * 1000)
    );
  }, [allSpurs]);

  const calcLengthOfZatyad = (length) => {
    const square =
      3.14 * (lengthOfZaryad.radius / 2) * (lengthOfZaryad.radius / 2);
    const res = length / (lengthOfZaryad.pressure * square);
    return res.toFixed(2) + ' (см)';
  };

  return (
    <DivisionForm
      id="12"
      title="Определение длины зарядов"
      name="lengthOfZaryad"
      onSubmit={handleSubmitForm}
      result={lengthOfZaryadResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          P - плотность ВВ в патроне, г/см<sup>3</sup>
        </h3>
        <input
          value={lengthOfZaryad.pressure}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="pressure"
          name="pressure"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">r - радиус патрона, см</h3>
        <input
          value={lengthOfZaryad.radius}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="radius"
          name="radius"
          maxLength="200"
          required
        />
      </div>

      <div className="division-label">
        <h3 className="division-text">Величина заряда во врубовых шпурах, г</h3>
        <input
          value={lengthOfZaryad.vrub}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="vrub"
          name="vrub"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">Величина заряда в отбойных шпурах, г</h3>
        <input
          value={lengthOfZaryad.okont}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="okont"
          name="okont"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">Величина заряда в контурных шпурах, г</h3>
        <input
          value={lengthOfZaryad.kontur}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="kontur"
          name="kontur"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};
export default LengthOfZaryad;
