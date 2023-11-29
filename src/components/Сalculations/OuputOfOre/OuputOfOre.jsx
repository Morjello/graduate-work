import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';

const OuputOfOre = ({
  averageDepthOfSpursForRes,
  kishResultForLength,
  setOuputOfOreForRes,
}) => {
  const [ouputOfOre, setOuputOfOre] = useState({
    lsr: '',
    n: '',
  });

  const [ouputOfOreResult, setOuputOfOreResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setOuputOfOre({ ...ouputOfOre, [name]: value });
  };

  const calcOuputOfOre = () => {
    return (ouputOfOre.L / ouputOfOre.LengthOfSpurs).toFixed(2);
  };

  useEffect(() => {
    setOuputOfOre(
      { ...ouputOfOre },
      (ouputOfOre.LengthOfSpurs = averageDepthOfSpursForRes)
    );
    setOuputOfOre(
      { ...ouputOfOre },
      (ouputOfOre.LengthOfSpurs = kishResultForLength)
    );
  }, [averageDepthOfSpursForRes, kishResultForLength]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setOuputOfOreResult(calcOuputOfOre() + ' м');
    setOuputOfOreForRes(calcOuputOfOre() + ' м');
  };

  return (
    <DivisionForm
      id="30"
      title=" Выход породы (руды) за цикл"
      name="ouputOfOre"
      onSubmit={handleSubmitForm}
      result={ouputOfOreResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          l<sub>ср</sub> – средняя длина шпуров
        </h3>
        <input
          value={ouputOfOre.lsr}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="lsr"
          name="lsr"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">n - коэффициент использования шпура</h3>
        <input
          value={ouputOfOre.n}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="n"
          name="n"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};

export default OuputOfOre;
