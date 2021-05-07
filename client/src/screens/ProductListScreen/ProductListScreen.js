import React, { useState, useEffect } from 'react';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import CatalogFilter from './components/CatalogFilter';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import Paginate from './components/Paginate';
import { listProducts } from '../../redux/actions/productActions';

const ProductListScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { pending } = productList;
  const [showSidebar, setShowSidebar] = useState(true);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(12);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, offset]);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    window.scrollTo(0, 0);
    setOffset(selectedPage * perPage);
  };

  return (
    <div className='product-container'>
      <div className='container'>
        <CatalogFilter
          showSidebar={showSidebar}
          handleSidebar={handleSidebar}
        />
        <div className='product-view'>
          <Sidebar showSidebar={showSidebar} />
          <ProductList
            pending={pending}
            offset={offset}
            perPage={perPage}
            setPageCount={setPageCount}
            productList={productList}
            showSidebar={showSidebar}
          />
        </div>
        <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
    </div>
  );
};

export default ProductListScreen;
