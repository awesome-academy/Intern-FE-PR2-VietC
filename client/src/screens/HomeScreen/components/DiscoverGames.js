import React from 'react';
import { Link } from 'react-router-dom';
import { changePlatform } from '../../../utils/utils';
import { useTranslation } from 'react-i18next';

const DiscoverGames = ({ discoverGames }) => {
  const { t } = useTranslation();

  return (
    <section className='discover-games'>
      <div className='container'>
        <div className='row'>
          {discoverGames.map((item, index) => {
            const {
              _id,
              slug,
              image,
              name,
              platforms,
              newPrice,
              oldPrice,
            } = item;
            return (
              <div className='col-md-6' key={index}>
                <Link to={`/game/${_id}/${slug}`} className='discover-item'>
                  <div className='discover-img-container'>
                    <div
                      className='discover-img'
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                  </div>
                  <div className='discover-text'>
                    <div className='discover-name'>{name}</div>
                    <div className='discover-platforms'>
                      {t('availableOn')}
                      {platforms.map((item, index) => {
                        return (
                          <span key={index}>
                            <i className={`fab fa-${changePlatform(item)}`}></i>
                          </span>
                        );
                      })}
                    </div>
                    {oldPrice > 0 ? (
                      <div className='discover-price'>
                        <span className='discover-discount'>
                          {`-${Math.round(
                            100 - (newPrice / oldPrice) * 100
                          )} %`}
                        </span>
                        <span className='old-price'>{oldPrice}$</span>
                        <span className='new-price'>{newPrice}$</span>
                      </div>
                    ) : (
                      <div className='discover-price'>
                        <span className='new-price'>{newPrice}$</span>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DiscoverGames;
