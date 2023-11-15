import React, { useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import '../../DivisionForm/DivisionForm.sass';

const AirOfGasAfterExplosion = ({ setAirOfGasForRes }) => {
  const [airOfGas, setAirOfGas] = useState({
    Scv: '',
    T: '',
    Qvv: '',
    Ivv: '',
    L: '',
    Kobv: '',
    Kyt: '',
  });
  const [airOfGasResult, setAirOfGasResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setAirOfGas({ ...airOfGas, [name]: value });
  };

  const calcAirOfGas = () => {
    const firstCalc = (2.25 * airOfGas.Scv) / airOfGas.T;
    const lengthCalc = airOfGas.L * airOfGas.L;
    const secondCalc =
      (airOfGas.Qvv * airOfGas.Ivv * lengthCalc * airOfGas.Kobv) /
      (airOfGas.Scv * airOfGas.Kyt);
    const thirdCalc = secondCalc ** (1 / 3);
    return firstCalc * thirdCalc;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setAirOfGasResult(calcAirOfGas());
    setAirOfGasForRes(calcAirOfGas());
  };

  return (
    <DivisionForm
      id="18"
      title="Расход воздуха по газам, образующимся после взрывных работ"
      name="airOfGasAfterExplosion"
      onSubmit={handleSubmitForm}
      result={airOfGasResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          Sсв - площадь выработки в свету, м<sup>3</sup>
        </h3>
        <input
          value={airOfGas.Scv}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Scv"
          name="Scv"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          Т – время проветривания забоя после взрыва, мин
        </h3>
        <input
          value={airOfGas.T}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="T"
          name="T"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          Qвв – масса одновременно взрываемого ВВ, кг
        </h3>
        <input
          value={airOfGas.Qvv}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Qvv"
          name="Qvv"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">Iвв – газовость ВВ, л/кг</h3>
        <input
          value={airOfGas.Ivv}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Ivv"
          name="Ivv"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">L – длина выработки, м</h3>
        <input
          value={airOfGas.L}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="L"
          name="L"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          kобв – коэффициент, учитывающий обводненность выработки
        </h3>
        <input
          value={airOfGas.Kobv}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Kobv"
          name="Kobv"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">kут – коэффициент утечек воздуха</h3>
        <input
          value={airOfGas.Kyt}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Kyt"
          name="Kyt"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};

export default AirOfGasAfterExplosion;
