import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import { useDispatch, useSelector } from 'react-redux';
import { CALC_LENGTH_OF_SPURS } from '../../../store/actions/actions';

const LengthOfSpurs = ({ setLengthOfSpur, setLengthOfSpursForDepth }) => {
  const [lengthOfSpurs, setLengthOfSpurs] = useState({
    speed: '',
    tc: '',
    B: '',
    m: '',
    Nz: '',
    kish: '',
  });

  const dispatch = useDispatch();
  const lengthOfSpur = useSelector((state) => state.lengthOfSpur);
  const kish = useSelector((state) => state.kish);

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setLengthOfSpurs({ ...lengthOfSpurs, [name]: value });
  };

  const calcLengthOfSpurRedux = () => {
    const res = (
      (lengthOfSpurs.speed * lengthOfSpurs.tc) /
      (lengthOfSpurs.B * lengthOfSpurs.m * lengthOfSpurs.kish)
    ).toFixed(1);
    dispatch({
      type: CALC_LENGTH_OF_SPURS,
      payload: {
        count: res,
        speed: lengthOfSpurs.speed,
        tc: lengthOfSpurs.tc,
        B: lengthOfSpurs.B,
        m: lengthOfSpurs.m,
        Nz: lengthOfSpurs.Nz,
      },
    });
  };

  const calcLengthOfSpurs = () => {
    return (
      (lengthOfSpurs.speed * lengthOfSpurs.tc) /
      (lengthOfSpurs.B * lengthOfSpurs.m * lengthOfSpurs.kish)
    ).toFixed(1);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    calcLengthOfSpurRedux();

    setLengthOfSpur(calcLengthOfSpurs());
    setLengthOfSpursForDepth(calcLengthOfSpurs());
  };
  console.log(lengthOfSpur);
  useEffect(() => {
    setLengthOfSpurs({
      speed: lengthOfSpur.speed,
      tc: lengthOfSpur.tc,
      B: lengthOfSpur.B,
      m: lengthOfSpur.m,
      Nz: lengthOfSpur.Nz,
      kish: kish.count,
    });
  }, []);

  return (
    <>
      <DivisionForm
        id="13"
        title="Определение длины шпуров"
        name="lengthOfSpurs"
        onSubmit={handleSubmitForm}
        result={lengthOfSpur.count + ' м'}
      >
        <div className="division-label">
          <h3 className="division-text">
            V - скорость проведения выработки, м/мес
          </h3>
          <input
            value={lengthOfSpurs.speed}
            onChange={handleInputChange}
            type="text"
            className="division-input"
            id="speed"
            name="speed"
            required
          />
        </div>
        <div className="division-label">
          <h3 className="division-text">
            Т<sub>ц</sub> – продолжительность цикла (1-2 смены)
          </h3>
          <input
            value={lengthOfSpurs.tc}
            onChange={handleInputChange}
            type="text"
            className="division-input"
            id="tc"
            name="tc"
            maxLength="200"
            required
          />
        </div>

        <div className="division-label">
          <h3 className="division-text">
            в – количество смен в сутки по проходке выработки
          </h3>
          <input
            value={lengthOfSpurs.B}
            onChange={handleInputChange}
            type="text"
            className="division-input"
            id="B"
            name="B"
            required
          />
        </div>
        <div className="division-label">
          <h3 className="division-text">
            m – количество рабочих дней для проходческой бригады в месяц
          </h3>
          <input
            value={lengthOfSpurs.m}
            onChange={handleInputChange}
            type="text"
            className="division-input"
            id="m"
            name="m"
            maxLength="200"
            required
          />
        </div>
        <div className="division-label">
          <h3 className="division-text">Коэффицент использования шпура</h3>
          <input
            value={lengthOfSpurs.kish}
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
