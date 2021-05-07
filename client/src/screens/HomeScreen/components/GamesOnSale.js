import React from 'react';
import Spinner from '../../../components/Spinner/Spinner';
import ProductItemGridView from '../../../components/ProductItem/ProductItemGridView';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';

const GamesOnSale = ({ pending, gamesOnSale }) => {
  const { t } = useTranslation();

  return pending ? (
    <section className='games-on-sale'>
      <div className='container'>
        <h1 className='title'>{t('gamesOnSale')}</h1>
        <Spinner />
      </div>
    </section>
  ) : (
    <section className='games-on-sale'>
      <div className='container'>
        <h1 className='title'>{t('gamesOnSale')}</h1>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={false}
          customTransition='all 0.25s ease-in-out'
          transitionDuration={500}
          containerClass='carousel-container'
        >
          {gamesOnSale.map((item, index) => {
            return <ProductItemGridView product={item} key={index} />;
          })}
        </Carousel>
      </div>
    </section>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 567 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 567, min: 0 },
    items: 2,
  },
};

export default GamesOnSale;
