import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const ProductItemListView = ({ product }) => {
  const { _id, slug, image, name, newPrice, oldPrice } = product;

  return (
    <div className='product-card'>
      <Link
        to={`/game/${_id}/${slug}`}
        className='product-item product-item--list'
      >
        <div className='product-img-container'>
          <div
            className='product-img'
            style={{ backgroundImage: `url("${image}")` }}
          ></div>
        </div>
        <div className='product-text'>
          <h3 className='product-name'>{name}</h3>
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
      <button className='product-icon'>
        <i className='ei ei-icon_cart_alt'></i>
      </button>
    </div>
  );
};

export default ProductItemListView;
