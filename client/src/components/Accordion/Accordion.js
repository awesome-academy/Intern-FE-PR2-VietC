import React, { useState, useRef } from 'react';
import './styles.scss';

const Accordion = (props) => {
  const [setActive, setActiveState] = useState('active');

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '');
  };

  return (
    <div className='accordion'>
      <div className='accordion-header'>
        <h2 className='mb-0'>
          <button
            className={`btn btn-block text-left ${setActive}`}
            onClick={toggleAccordion}
          >
            {props.title}
            <i className='ei ei-arrow_carrot-down'></i>
          </button>
        </h2>
      </div>
      <div
        ref={content}
        style={{
          maxHeight: `${
            setActive === 'active' && content.current
              ? `${content.current.scrollHeight}px`
              : '0px'
          }`,
        }}
        className='accordion-content'
      >
        <div className='accordion-body'>{props.element}</div>
      </div>
    </div>
  );
};

export default Accordion;
