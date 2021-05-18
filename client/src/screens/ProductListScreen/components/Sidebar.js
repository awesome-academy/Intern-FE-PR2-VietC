import React from 'react';
import Accordion from '../../../components/Accordion/Accordion';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ showSidebar }) => {
  const { t } = useTranslation();

  return (
    <div
      className='catalog-sidebar'
      style={{ width: showSidebar ? '250px' : '0px' }}
    >
      {filters.map((item, index) => {
        const { title, type, options } = item;
        const accordionContent = options.map((item, index) => {
          const { value, label } = item;
          return (
            <div className='option-item' key={index}>
              <div className='checkmark-item'>
                <label htmlFor={value}>
                  {t(`filters.${title}.${item}`)}
                  <input
                    type={type}
                    name={`${type === 'radio' ? title : label}`}
                    id={value}
                  />
                  <div className='checkmark'></div>
                </label>
              </div>
            </div>
          );
        });

        return (
          <div className='filter-item' key={index}>
            <Accordion
              title={t(`filters.${title}.${title}`)}
              element={accordionContent}
            />
          </div>
        );
      })}
    </div>
  );
};

const filters = [
  {
    title: 'price',
    type: 'radio',
    options: ['u5', 'u15', 'u25', 'u50', 'a50', 'discounted'],
  },
  {
    title: 'system',
    type: 'checkbox',
    options: ['windows', 'mac', 'linux'],
  },
  {
    title: 'features',
    type: 'checkbox',
    options: [
      'single',
      'multi',
      'atmospheric',
      'full_controller',
      'great_soundtrack',
      'coop',
      'open_world',
      'sandbox',
      'story_rich',
      'scifi',
      'fps',
      'horror',
      '2d',
      'partial_support',
      'turn_based',
    ],
  },
];

export default Sidebar;
