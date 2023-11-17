import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';

const SpecificVV = ({ svch, setSpecificVVRes, setQ }) => {
  const [specificVV, setSpecificVV] = useState({
    f: '',
    f0: '',
    Svch: '',
    P: '',
    m: '',
  });
  const [specificVVResult, setSpecificVVResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setSpecificVV({ ...specificVV, [name]: value });
  };

  const calcSpecificVV = () => {
    const v = 6.5 / specificVV.Svch ** (1 / 2);
    const eKoef = 380 / specificVV.P;
    const res = specificVV.f * specificVV.f0 * v * specificVV.m * eKoef * 0.1;
    return res.toFixed(2);
  };

  useEffect(() => {
    setSpecificVV({ ...specificVV }, (specificVV.Svch = svch));
  }, [svch]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSpecificVVResult(calcSpecificVV() + ' (кг/м3)');
    setSpecificVVRes(calcSpecificVV());
    setQ(calcSpecificVV());
  };

  return (
    <DivisionForm
      id="5"
      title="Определение удельного расхода ВВ"
      name="specificVV"
      onSubmit={handleSubmitForm}
      result={specificVVResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          f – средняя крепость пород в забое выработки
        </h3>
        <input
          value={specificVV.f}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="f"
          name="f"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          f<sub>0</sub> – коэффициент структуры породы
        </h3>
        <input
          value={specificVV.f0}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="f0"
          name="f0"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          S<sub>вч</sub> – площадь выработки вчерне, м<sup>2</sup>
        </h3>
        <input
          value={specificVV.Svch}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Svch"
          name="Svch"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          P - работоспособность принятого ВВ, см<sup>3</sup>
        </h3>
        <input
          value={specificVV.P}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="P"
          name="P"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          m – коэффициент учитывающий диаметр патрона ВВ
        </h3>
        <input
          value={specificVV.m}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="m"
          name="m"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};

export default SpecificVV;
