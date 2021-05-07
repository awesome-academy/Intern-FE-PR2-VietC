import React, { useState, useEffect, useRef } from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';

const Dropdown = ({ title, dropdownOptions, selected, onSelectedChange }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onClickOutside = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };

    document.body.addEventListener('click', onClickOutside);

    return () => {
      document.body.removeEventListener('click', onClickOutside);
    };
  }, []);

  const handleDropdown = (option) => {
    onSelectedChange(option);
    setIsOpen(!isOpen);
  };

  const renderedOptions = dropdownOptions.map((option) => {
    return (
      <div key={option} className='dropdown-item'>
        <div className='checkmark-item'>
          <label htmlFor={option}>
            {t(`${title}.${option}`)}
            <input
              type='radio'
              name={title}
              id={option}
              onChange={() => handleDropdown(option)}
              checked={option === selected ? true : false}
            />
            <div className='checkmark'></div>
          </label>
        </div>
      </div>
    );
  });

  return (
    <div ref={ref} className='dropdown'>
      <button className='dropdown-trigger' onClick={() => setIsOpen(!isOpen)}>
        {t(`${title}.${selected}`)}
        <i className='ei ei-arrow_carrot-down'></i>
      </button>
      <div className={`dropdown-content ${isOpen ? 'active' : ''}`}>
        {renderedOptions}
      </div>
    </div>
  );
};

export default Dropdown;
