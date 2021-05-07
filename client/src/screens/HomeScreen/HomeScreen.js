import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import Hero from './components/Hero';
import GamesOnSale from './components/GamesOnSale';
import NewAndTrending from './components/NewAndTrending';
import { listProducts } from '../../redux/actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { pending, products, error } = productList;
  const gamesOnSale = products.filter((item) => item.oldPrice > 0);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className='home'>
      <Hero />
      <GamesOnSale pending={pending} gamesOnSale={gamesOnSale} />
      <NewAndTrending pending={pending} products={products} />
    </div>
  );
};

export default HomeScreen;
