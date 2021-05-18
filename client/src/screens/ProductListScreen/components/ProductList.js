import React, { Fragment, useState, useEffect } from 'react';
import ProductItemGridView from '../../../components/ProductItem/ProductItemGridView';
import Spinner from '../../../components/Spinner/Spinner';

const ProductList = ({
  pending,
  offset,
  perPage,
  setPageCount,
  productList,
  showSidebar,
}) => {
  const { products } = productList;
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    const currentProducts = products.slice(offset, offset + perPage);
    setCurrentProducts(currentProducts);
    setPageCount(Math.ceil(products.length / perPage));
  }, [productList, offset]);

  return pending ? (
    <div
      className='product-list'
      style={{ width: showSidebar ? 'calc(100% - 250px)' : '100%' }}
    >
      <Spinner />
    </div>
  ) : (
    <div
      className='product-list'
      style={{ width: showSidebar ? 'calc(100% - 250px)' : '100%' }}
    >
      <div className='row'>
        {currentProducts.map((item, index) => {
          return (
            <div className='col-lg-3 col-md-4 col-6 p-0' key={index}>
              <ProductItemGridView product={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
