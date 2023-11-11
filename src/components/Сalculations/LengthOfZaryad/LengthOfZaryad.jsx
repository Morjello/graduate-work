import React, { useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import division from '../../func/division';

const LengthOfZaryad = ({ zaryadInSpurs, setLengthOfZar }) => {
  const [lengthOfZaryad, setLengthOfZaryad] = useState({
    pressure: '',
    radius: '',
    vrub: '',
    okont: '',
    kontur: '',
  });
  const [lengthOfZaryadResult, setLengthOfZaryadResult] = useState('');
  const [lengthOfAllSpurs, setLengthOfAllSpurs] = useState({
    vrub: '',
    okont: '',
    kontur: '',
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setLengthOfZaryad({ ...lengthOfZaryad, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setLengthOfZaryadResult(
      division(lengthOfZaryad.pressure, lengthOfZaryad.radius)
    );

    setLengthOfAllSpurs({
      vrub: calcLengthOfZatyad(zaryadInSpurs.vrub ?? lengthOfZaryad.vrub),
      okont: calcLengthOfZatyad(zaryadInSpurs.okont ?? lengthOfZaryad.okont),
      kontur: calcLengthOfZatyad(zaryadInSpurs.kontur ?? lengthOfZaryad.kontur),
    });
    setLengthOfZar({
      vrub: calcLengthOfZatyad(zaryadInSpurs.vrub ?? lengthOfZaryad.vrub),
      okont: calcLengthOfZatyad(zaryadInSpurs.okont ?? lengthOfZaryad.okont),
      kontur: calcLengthOfZatyad(zaryadInSpurs.kontur ?? lengthOfZaryad.kontur),
    });
  };

  const calcLengthOfZatyad = (q) => {
    const square =
      3.14 * (lengthOfZaryad.radius / 2) * (lengthOfZaryad.radius / 2);
    return q / (lengthOfZaryad.pressure * square);
  };

  return (
    <>
      <DivisionForm
        id="12"
        title="Определение длины зарядов"
        name="lengthOfZaryad"
        onSubmit={handleSubmitForm}
        result={lengthOfZaryadResult}
      >
        <div className="division-label">
          <h3 className="division-text">Плотность ВВ в патроне, г/см3</h3>
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
          <h3 className="division-text">Радиус патрона, см</h3>
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
          <h3 className="division-text">
            Величина заряда во врубовых шпурах, г
          </h3>
          <input
            value={zaryadInSpurs.vrub ?? lengthOfZaryad.vrub}
            onChange={handleInputChange}
            type="text"
            className="division-input"
            id="vrub"
            name="vrub"
            required
          />
        </div>
        <div className="division-label">
          <h3 className="division-text">Величина заряда в отбойных шпуре, г</h3>
          <input
            value={zaryadInSpurs.okont ?? lengthOfZaryad.okont}
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
          <h3 className="division-text">
            Величина заряда в контурных шпурах, г
          </h3>
          <input
            value={zaryadInSpurs.kontur ?? lengthOfZaryad.kontur}
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

      <div className="division">
        <h3 className="division-text">Длина заряда в шпурах</h3>
        <p className="division-text">
          Во врубовых: {lengthOfAllSpurs.vrub}, см
        </p>
        <p className="division-text">
          В отбойных: {lengthOfAllSpurs.okont}, см
        </p>
        <p className="division-text">
          В контурных: {lengthOfAllSpurs.kontur}, см
        </p>
      </div>
    </>
  );
};
export default LengthOfZaryad;
