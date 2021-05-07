import React from 'react';
import Spinner from '../../../components/Spinner/Spinner';
import ProductItemGridView from '../../../components/ProductItem/ProductItemGridView';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { shuffleArray } from '../../../utils/utils';
import { useTranslation } from 'react-i18next';

const RecommendForYou = ({ pending, products }) => {
  const { t } = useTranslation();

  return pending ? (
    <section className='recommend-for-you'>
      <div className='container'>
        <h1 className='title'>{t('recommendForYou')}</h1>
        <Spinner />
      </div>
    </section>
  ) : (
    <section className='recommend-for-you'>
      <div className='container'>
        <h1 className='title'>{t('recommendForYou')}</h1>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          customTransition='all 0.25s ease-in-out'
          transitionDuration={500}
          containerClass='carousel-container'
        >
          {shuffleArray(products).map((item, index) => {
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

export default RecommendForYou;
