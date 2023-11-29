import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import division from '../../func/division';
import { useDispatch, useSelector } from 'react-redux';
import { calcKkiAction } from '../../../store/actionCreators/actionCreators';

const Kki = ({ setKki, setSpr, setSvch }) => {
  const dispatch = useDispatch();
  const kki = useSelector((state) => state.kki);

  const [kkiData, setKkiData] = useState({ Spr: '', Svch: '' });

  const calcKki = () => {
    const res = division(kkiData.Spr, kkiData.Svch).toFixed(2);
    dispatch(
      calcKkiAction({
        count: res,
        Spr: kkiData.Spr,
        Svch: kkiData.Svch,
      })
    );
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setKkiData({ ...kkiData, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    calcKki();
    setKki(division(kkiData.Spr, kkiData.Svch).toFixed(2));
    setSpr(kkiData.Spr);
    setSvch(kkiData.Svch);
  };

  useEffect(() => {
    setKkiData({ Spr: kki.Spr, Svch: kki.Svch });
  }, []);
  return (
    <DivisionForm
      id="2"
      title="Коэффициент излишка сечения (КИС)"
      name="kki"
      onSubmit={handleSubmitForm}
      result={kki.count}
    >
      <div className="division-label">
        <h3 className="division-text">
          S<sub>пр</sub> – площадь выработки в проходке, м<sup>2</sup>
        </h3>
        <input
          value={kkiData.Spr}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Spr"
          name="Spr"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          S<sub>вч</sub> – площадь выработки вчерне, м<sup>2</sup>
        </h3>
        <input
          value={kkiData.Svch}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Svch"
          name="Svch"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};

export default Kki;
