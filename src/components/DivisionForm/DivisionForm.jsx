import React, { useState } from 'react';
import './DivisionForm.sass';

const DivisionForm = ({ name, title, id, children, onSubmit, result }) => {
  // const [activeButton, setActiveButton] = useState(false);
  return (
    <div className="division">
      <div className="division-container">
        <form className="division-form" name={name} id={id} onSubmit={onSubmit}>
          <h2 className="division-title">{title}</h2>
          {children}
          <button
            className="division-button"
            type="submit"
            // disabled={activeButton}
          >
            Рассчитать
          </button>
          <p className="division-result">Результат расчета: {result}</p>
        </form>
      </div>
    </div>
  );
};

export default DivisionForm;
