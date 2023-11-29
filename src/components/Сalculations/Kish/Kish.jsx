import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import '../../DivisionForm/DivisionForm.sass';
import division from '../../func/division';
import { useDispatch, useSelector } from 'react-redux';
import { CALC_KISH } from '../../../store/actions/actions';

const Kish = ({ setKishResultForLength }) => {
  const dispatch = useDispatch();
  const kish = useSelector((state) => state.kish);

  const [kishData, setKishData] = useState({ length: '', depth: '' });

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setKishData({ ...kishData, [name]: value });
  };

  const calcKish = () => {
    return division(kishData.length, kishData.depth).toFixed(2);
  };

  const calcKishRedux = () => {
    const res = division(kishData.length, kishData.depth).toFixed(2);
    dispatch({
      type: CALC_KISH,
      payload: {
        count: res,
        length: kishData.length,
        depth: kishData.depth,
      },
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    calcKishRedux();
    setKishResultForLength(calcKish());
  };

  useEffect(() => {
    setKishData({ length: kish.length, depth: kish.depth });
  }, []);

  return (
    <DivisionForm
      id="1"
      title="Коэффициент использования шпуров (КИШ)"
      name="kish"
      onSubmit={handleSubmitForm}
      result={kish.count}
    >
      <div className="division-label">
        <h3 className="division-text">
          l<sub>зах</sub> – подвигание забоя за цикл, м
        </h3>
        <input
          value={kishData.length}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="length"
          name="length"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          l<sub>шп</sub> – глубина шпура, м
        </h3>
        <input
          value={kishData.depth}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="depth"
          name="depth"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};
export default Kish;
