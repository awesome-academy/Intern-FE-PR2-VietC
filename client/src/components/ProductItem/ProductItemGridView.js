import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductItemGridView = ({ product }) => {
  const { image, name, genres, newPrice, oldPrice } = product;
  const { t } = useTranslation();

  return (
    <div className='product-card'>
      <Link to='/#' className='product-item product-item--grid'>
        <div className='product-img-container'>
          <div
            className='product-img'
            style={{ backgroundImage: `url("${image}")` }}
          ></div>
        </div>
        <div className='product-text'>
          <h3 className='product-name'>{name}</h3>
          <p className='product-genres'>
            {genres.map((item, index) => {
              return (
                <span className='product-genre' key={index}>
                  {t(`categories.${item.replace(' & ', '').toLowerCase()}`)}
                </span>
              );
            })}
          </p>
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
        </div>
      </Link>
    </div>
  );
};

export default ProductItemGridView;
