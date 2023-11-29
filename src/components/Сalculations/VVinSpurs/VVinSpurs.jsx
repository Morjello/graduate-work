import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import division from '../../func/division';
import '../../DivisionForm/DivisionForm.sass';

const VVinSpurs = ({
  setZaryadInSpurs,
  setAllSpurs,
  setWeigthOfAllSpurs,
  quantityOfSpursRes,
  teorSpendVVOnExplore,
}) => {
  const [vvInSpurs, setVvInSpurs] = useState({ Q: '', N: '', m: '' });
  const [vvInSpursResult, setVvInSpursResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setVvInSpurs({ ...vvInSpurs, [name]: value });
  };

  useEffect(() => {
    setVvInSpurs({ ...vvInSpurs }, (vvInSpurs.Q = teorSpendVVOnExplore));
    setVvInSpurs({ ...vvInSpurs }, (vvInSpurs.N = quantityOfSpursRes));
  }, [teorSpendVVOnExplore, quantityOfSpursRes]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setVvInSpursResult(division(vvInSpurs.Q, vvInSpurs.N).toFixed(2) + ' (кг)');
    setAllSpurs({
      vrub: ((vvInSpurs.Q / vvInSpurs.N) * 1.2).toFixed(2),
      okont: (vvInSpurs.Q / vvInSpurs.N).toFixed(2),
      kontur: ((vvInSpurs.Q / vvInSpurs.N) * 0.9).toFixed(2),
    });
    setZaryadInSpurs({
      vrub: ((vvInSpurs.Q / vvInSpurs.N) * 1.2).toFixed(2) + ' (кг)',
      okont: (vvInSpurs.Q / vvInSpurs.N).toFixed(2) + ' (кг)',
      kontur: ((vvInSpurs.Q / vvInSpurs.N) * 0.9).toFixed(2) + ' (кг)',
    });
    setWeigthOfAllSpurs({
      vrubWeigth:
        (((vvInSpurs.Q / vvInSpurs.N) * 1.2) / vvInSpurs.m).toFixed(2) +
        ' (кг)',
      okontWeigth:
        (vvInSpurs.Q / vvInSpurs.N / vvInSpurs.m).toFixed(2) + ' (кг)',
      konturWeigth:
        (((vvInSpurs.Q / vvInSpurs.N) * 0.9) / vvInSpurs.m).toFixed(2) +
        ' (кг)',
    });
  };

  return (
    <DivisionForm
      id="8"
      title="Средняя величина заряда в шпуре"
      name="vvInSpurs"
      onSubmit={handleSubmitForm}
      result={vvInSpursResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          Q – расход ВВ на взрыв (теоретический), (кг)
        </h3>
        <input
          value={vvInSpurs.Q}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Q"
          name="Q"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">N – количество шпуров, шт</h3>
        <input
          value={vvInSpurs.N}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="N"
          name="N"
          maxLength="200"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          Масса заряда (должна быть кратна массе патрона)
        </h3>
        <input
          value={vvInSpurs.m}
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
export default VVinSpurs;
