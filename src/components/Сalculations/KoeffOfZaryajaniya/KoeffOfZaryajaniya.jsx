import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import '../../DivisionForm/DivisionForm.sass';
import division from '../../func/division';

const KoeffOfZaryajaniya = ({
  lengthOfSpur,
  lengthOfZar,
  setKoeffOfZarForRes,
}) => {
  const [koeffOfZaryajaniya, setKoeffOfZaryajaniya] = useState({
    lengthZar: '',
    lengthSpur: '',
  });
  const [koeffOfZaryajaniyaResult, setKoeffOfZaryajaniyaResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setKoeffOfZaryajaniya({ ...koeffOfZaryajaniya, [name]: value });
  };

  const calcKoeffOfZaryajaniya = () => {
    return division(
      koeffOfZaryajaniya.lengthZar,
      koeffOfZaryajaniya.lengthSpur
    ).toFixed(2);
  };

  useEffect(() => {
    setKoeffOfZaryajaniya(
      { ...koeffOfZaryajaniya },
      (koeffOfZaryajaniya.lengthSpur = lengthOfSpur)
    );
  }, [lengthOfSpur]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setKoeffOfZaryajaniyaResult(calcKoeffOfZaryajaniya());
    setKoeffOfZarForRes(calcKoeffOfZaryajaniya());
  };

  return (
    <DivisionForm
      id="15"
      title="Коэффициент заряжания (заполнения) шпуров"
      name="koeffOfZaryajaniya"
      onSubmit={handleSubmitForm}
      result={koeffOfZaryajaniyaResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          L<sub>зар</sub> - длина заряда, см
        </h3>
        <input
          value={koeffOfZaryajaniya.lengthZar}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="lengthZar"
          name="lengthZar"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          L<sub>шп</sub>- длина шпура, см
        </h3>
        <input
          value={koeffOfZaryajaniya.lengthSpur}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="lengthSpur"
          name="lengthSpur"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};
export default KoeffOfZaryajaniya;
