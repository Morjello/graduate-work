import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import { useDispatch, useSelector } from 'react-redux';
import { CALC_KZSH } from '../../../store/actions/actions';

const Kzsh = ({ setKzsh, lengthOfSpur }) => {
  const dispatch = useDispatch();
  const kzsh = useSelector((state) => state.kzsh);

  const [kzshData, setKzshData] = useState({ Lzar: '', Lshp: '' });

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setKzshData({ ...kzshData, [name]: value });
  };

  const calcKzsh = () => {
    const res = (kzshData.Lzar / kzshData.Lshp).toFixed(1);
    dispatch({
      type: CALC_KZSH,
      payload: {
        count: res,
        Lzar: kzshData.Lzar,
        Lshp: kzshData.Lshp,
      },
    });
  };

  useEffect(() => {
    setKzshData({ ...kzshData }, (kzshData.Lshp = lengthOfSpur));
  }, [lengthOfSpur]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    calcKzsh();
  };

  useEffect(() => {
    setKzshData({ Lzar: kzsh.Lzar, Lshp: kzsh.Lshp });
  }, [kzsh.Lzar, kzsh.Lshp]);

  return (
    <DivisionForm
      id="3"
      title="Коэффициент заряжания шпуров (КЗШ)"
      name="kzsh"
      onSubmit={handleSubmitForm}
      result={kzsh.count}
    >
      <div className="division-label">
        <h3 className="division-text">
          l<sub>зар</sub> – длина заряда, м
        </h3>
        <input
          value={kzshData.Lzar}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Lzar"
          name="Lzar"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          l<sub>шп</sub> – длина шпура, м
        </h3>
        <input
          value={kzshData.Lshp}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Lshp"
          name="Lshp"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};
export default Kzsh;
