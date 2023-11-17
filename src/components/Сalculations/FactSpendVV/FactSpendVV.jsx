import React, { useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import '../../DivisionForm/DivisionForm.sass';

const FactSpendVV = ({ setFactSpendVVForRes }) => {
  const [factSpendVV, setFactSpendVV] = useState({
    qvr: '',
    Nvr: '',
    qotb: '',
    Notb: '',
    qkon: '',
    Nkon: '',
  });
  const [factSpendVVResult, setFactSpendVVResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setFactSpendVV({ ...factSpendVV, [name]: value });
  };

  const calcFactSpendVV = () => {
    return (
      (
        factSpendVV.qvr *
        factSpendVV.Nvr *
        factSpendVV.qotb *
        factSpendVV.Notb *
        factSpendVV.qkon *
        factSpendVV.Nkon
      ).toFixed(1) + ' (кг)'
    );
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFactSpendVVResult(calcFactSpendVV());
    setFactSpendVVForRes(calcFactSpendVV());
  };

  return (
    <DivisionForm
      id="17"
      title="Фактический расход ВВ на заходку"
      name="factSpendVV"
      onSubmit={handleSubmitForm}
      result={factSpendVVResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          q<sub>вр</sub> - величина заряда во врубовых шпурах
        </h3>
        <input
          value={factSpendVV.qvr}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="qvr"
          name="qvr"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          N<sub>вр</sub> - количество врубовых шпуров
        </h3>
        <input
          value={factSpendVV.Nvr}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Nvr"
          name="Nvr"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          q<sub>отб</sub> - величина заряда во отбойных шпурах
        </h3>
        <input
          value={factSpendVV.qotb}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="qotb"
          name="qotb"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          N<sub>отб</sub> - количество отбойных шпуров
        </h3>
        <input
          value={factSpendVV.Notb}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Notb"
          name="Notb"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          q<sub>конт</sub> - величина заряда во контурных шпурах
        </h3>
        <input
          value={factSpendVV.qkon}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="qkon"
          name="qkon"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          N<sub>конт</sub> - количество контурных шпуров
        </h3>
        <input
          value={factSpendVV.Nkon}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Nkon"
          name="Nkon"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};
export default FactSpendVV;
