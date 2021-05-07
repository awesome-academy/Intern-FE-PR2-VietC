import React from 'react';
import ProductItemListView from '../../../components/ProductItem/ProductItemListView';
import { useTranslation } from 'react-i18next';
import { shuffleArray } from '../../../utils/utils';

const NewAndTrending = ({ pending, products }) => {
  const { t } = useTranslation();

  return (
    <section className='new-and-trending'>
      <div className='container'>
        <h1 className='title'>{t('newAndTrending')}</h1>
        <div className='top-list'>
          <div className='row'>
            <div className='col-4'>
              <div className='list-item'>
                <h2>{t('newReleases')}</h2>
                <div className='product-list'>
                  {shuffleArray(products)
                    .slice(0, 5)
                    .map((item, index) => {
                      return <ProductItemListView product={item} key={index} />;
                    })}
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='list-item'>
                <h2>{t('topSeller')}</h2>
                <div className='product-list'>
                  {shuffleArray(products)
                    .slice(0, 5)
                    .map((item, index) => {
                      return <ProductItemListView product={item} key={index} />;
                    })}
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='list-item'>
                <h2>{t('comingSoon')}</h2>
                <div className='product-list'>
                  {shuffleArray(products)
                    .slice(0, 5)
                    .map((item, index) => {
                      return <ProductItemListView product={item} key={index} />;
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAndTrending;
