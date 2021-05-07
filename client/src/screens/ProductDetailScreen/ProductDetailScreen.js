import React, { useEffect } from 'react';
import './styles.scss';
import Breadcrumb from './components/Breadcrumb';
import ProductContent from './components/ProductContent';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';

const ProductDetailScreen = ({ match }) => {
  const productId = match.params.id;
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;
  const { name } = product || [];

  useEffect(() => {
    dispatch(getProductDetails(productId));
  }, [dispatch, productId]);

  return (
    <div className='product-detail-container'>
      <div className='container'>
        <Breadcrumb name={name} />
        <ProductContent product={product} />
      </div>
    </div>
  );
};

export default ProductDetailScreen;
