import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';

const TeorSpendVV = ({ setTeorSpendVVOnExplore, svch, lengthOfSpur, q }) => {
  const [spendVV, setSpendVV] = useState({ s: '', l: '', q: '' });
  const [spendVVResult, setSpendVVResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setSpendVV({ ...spendVV, [name]: value });
  };

  const calcTeorSpendVV = () => {
    return (spendVV.s * spendVV.l * spendVV.q).toFixed(1);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSpendVVResult(calcTeorSpendVV() + ' (кг)');
    setTeorSpendVVOnExplore(calcTeorSpendVV());
  };

  useEffect(() => {
    setSpendVV({ ...spendVV }, (spendVV.s = svch));
    setSpendVV({ ...spendVV }, (spendVV.l = lengthOfSpur));
    setSpendVV({ ...spendVV }, (spendVV.q = q));
  }, [svch, lengthOfSpur]);

  return (
    <DivisionForm
      id="6"
      title="Теоретический расход ВВ на взрыв"
      name="spendVV"
      onSubmit={handleSubmitForm}
      result={spendVVResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          S<sub>вч</sub> - площадь выработки в черне, м<sup>2</sup>
        </h3>
        <input
          value={spendVV.s}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="s"
          name="s"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          l<sub>шп</sub> - длина шпура, м
        </h3>
        <input
          value={spendVV.l}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="l"
          name="l"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          q – удельный расход ВВ, кг/м<sup>3</sup>
        </h3>
        <input
          value={spendVV.q}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="q"
          name="q"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};
export default TeorSpendVV;
