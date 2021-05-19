import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductSidebar = ({ product }) => {
  const { t } = useTranslation();

  const { name, image, newPrice, oldPrice } = product || [];

  return (
    <div className='product-sidebar-container'>
      <div className='product-sidebar'>
        <div className='product-img-container'>
          <div
            className='product-img'
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className='p-3'>
          <div className='product-rating'>
            <span className='ei ei-icon_star'></span>
            <span className='ei ei-icon_star'></span>
            <span className='ei ei-icon_star'></span>
            <span className='ei ei-icon_star'></span>
            <span className='ei ei-icon_star-half_alt'></span>
          </div>
          {oldPrice > 0 ? (
            <div className='product-price'>
              <span className='product-discount'>
                {`-${Math.round(100 - (newPrice / oldPrice) * 100)} %`}
              </span>
              <div className='prices'>
                <span className='old-price'>{oldPrice}$</span>
                <span className='new-price'>{newPrice}$</span>
              </div>
            </div>
          ) : (
            <div className='product-price'>
              <span className='new-price'>{newPrice}$</span>
            </div>
          )}
          <button className='btn btn-block btn-primary'>
            {t('addToCart')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
