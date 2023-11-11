import React, { useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import '../../DivisionForm/DivisionForm.sass';
import division from '../../func/division';

const Kish = ({ setKishResultForLength }) => {
  const [kishData, setKishData] = useState({ length: '', depth: '' });
  const [kishResult, setKishResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setKishData({ ...kishData, [name]: value });
  };

  const calcKish = () => {
    return division(kishData.length, kishData.depth);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setKishResult(calcKish());
    setKishResultForLength(calcKish());
  };

  return (
    <DivisionForm
      id="1"
      title="Коэффициент использования шпуров (КИШ)"
      name="kish"
      onSubmit={handleSubmitForm}
      result={kishResult}
    >
      <div className="division-label">
        <h3 className="division-text">Продвигание забоя за цикл, м</h3>
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
        <h3 className="division-text">Глубина шпура, м</h3>
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
