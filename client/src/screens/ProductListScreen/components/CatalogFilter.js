import React, { useState } from 'react';
import Dropdown from '../../../components/Dropdown/Dropdown';
import { useTranslation } from 'react-i18next';

const CatalogFilter = ({ showSidebar, handleSidebar }) => {
  const [categorySelected, setCategorySelected] = useState(categories[0]);
  const [sortSelected, setSortSelected] = useState(sorts[0]);
  const { t } = useTranslation();

  return (
    <section className='catalog-container'>
      <div className='catalog-search'>
        <Dropdown
          title='categories'
          dropdownOptions={categories}
          selected={categorySelected}
          onSelectedChange={setCategorySelected}
        />
        <div className='group-input'>
          <span className='search-icon'>
            <i className='ei ei-icon_search'></i>
          </span>
          <input
            type='text'
            className='search-input'
            placeholder={`${t('searchFor')}...`}
            autoComplete='off'
          />
        </div>
      </div>
      <div className='catalog-filters-sorting'>
        <button className='filters-toggle' onClick={() => handleSidebar()}>
          <span
            className={`fas fa-long-arrow-alt-${
              showSidebar ? 'left' : 'right'
            }`}
          ></span>
          {t('filters.filter')}
        </button>
        <div className='sorting-container'>
          <span>{t('sorts.sortBy')}</span>
          <Dropdown
            title='sorts'
            dropdownOptions={sorts}
            selected={sortSelected}
            onSelectedChange={setSortSelected}
          />
        </div>
      </div>
    </section>
  );
};

const categories = [
  'allGames',
  'action',
  'adventure',
  'indie',
  'rpg',
  'shooters',
  'simulation',
  'sportsracing',
  'strategy',
];

const sorts = [
  'dateAdded',
  'alphabetically',
  'bestSelling',
  'userRating',
  'ascending',
  'descending',
];

export default CatalogFilter;
