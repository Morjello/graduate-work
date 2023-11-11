import React, { useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';

const LengthOfSpurs = ({ kishResultForLength, setLengthOfSpur }) => {
  const [lengthOfSpurs, setLengthOfSpurs] = useState({
    Length: '',
    tp: '',
    Vnorm: '',
    Nsm: '',
    Nz: '',
    kish: '',
  });
  const [lengthOfSpursResult, setLengthOfZaryadResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setLengthOfSpurs({ ...lengthOfSpurs, [name]: value });
  };

  const calcLengthOfSpurs = () => {
    return (
      lengthOfSpurs.Length /
      (lengthOfSpurs.tp *
        lengthOfSpurs.Vnorm *
        lengthOfSpurs.Nsm *
        lengthOfSpurs.Nz *
        lengthOfSpurs.kish)
    );
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setLengthOfZaryadResult(calcLengthOfSpurs());
    setLengthOfSpur(calcLengthOfSpurs());
  };

  return (
    <>
      <DivisionForm
        id="13"
        title="Определение длины шпуров"
        name="lengthOfSpurs"
        onSubmit={handleSubmitForm}
        result={`${lengthOfSpursResult} м`}
      >
        <div className="division-label">
          <h3 className="division-text">Длина выработки, м</h3>
          <input
            value={lengthOfSpurs.Length}
            onChange={handleInputChange}
            type="text"
            className="division-input"
            id="Length"
            name="Length"
            required
          />
        </div>
        <div className="division-label">
          <h3 className="division-text">Число рабочих дней в месяце</h3>
          <input
            value={lengthOfSpurs.tp}
            onChange={handleInputChange}
            type="text"
            className="division-input"
            id="tp"
            name="tp"
            maxLength="200"
            required
          />
        </div>

        <div className="division-label">
          <h3 className="division-text">
            Нормативные скорости проведения выработки, м/мес
          </h3>
          <input
            value={lengthOfSpurs.Vnorm}
            onChange={handleInputChange}
            type="text"
            className="division-input"
            id="Vnorm"
            name="Vnorm"
            required
          />
        </div>
        <div className="division-label">
          <h3 className="division-text">Число рабочих смен в сутки</h3>
          <input
            value={lengthOfSpurs.Nsm}
            onChange={handleInputChange}
            type="text"
            className="division-input"
            id="Nsm"
            name="Nsm"
            maxLength="200"
            required
          />
        </div>
        <div className="division-label">
          <h3 className="division-text">Число циклов в смену</h3>
          <input
            value={lengthOfSpurs.Nz}
            onChange={handleInputChange}
            type="text"
            className="division-input"
            id="Nz"
            name="Nz"
            maxLength="200"
            required
          />
        </div>
        <div className="division-label">
          <h3 className="division-text">Коэффицент использования шпура</h3>
          <input
            value={kishResultForLength ?? lengthOfSpurs.kish}
            onChange={handleInputChange}
            type="text"
            className="division-input"
            id="kish"
            name="kish"
            maxLength="200"
            required
          />
        </div>
      </DivisionForm>
    </>
  );
};
export default LengthOfSpurs;
