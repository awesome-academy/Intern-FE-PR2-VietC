import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Breadcrumb = ({ name }) => {
  const { t } = useTranslation();

  return (
    <div className='breadcrumb-container'>
      <Link to='/games'>
        <i className='ei ei-arrow_carrot-left'></i>
        {t('backToStore')}
      </Link>
      <div className='divider'></div>
      <p className='product-name'>{name}</p>
    </div>
  );
};

export default Breadcrumb;
