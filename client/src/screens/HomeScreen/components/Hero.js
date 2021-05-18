import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className='hero'>
      <div className='hero-img'>
        <div className='hero-text'>
          <p className='pb-2'>{t('heroText')}</p>
          <Link className='btn btn-primary' to='/products'>
            {t('browseAllGames')}
          </Link>
        </div>
      </div>
      <div className='hero-genres'>
        <div className='container'>
          <div className='title'>{t('browseGenres')}</div>
          <div className='genre-list'>
            {genres.map((item, index) => {
              const { label, img } = item;
              return (
                <div className='genre-item' key={index}>
                  <div className='genre-content'>
                    <img
                      className='genre-img'
                      src={img}
                      alt={`${label} image`}
                    />
                    <div className='genre-text'>{t(`categories.${label}`)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const genres = [
  {
    label: 'action',
    img: 'https://s.gjcdn.net/assets/action.7447804b.png',
  },
  {
    label: 'adventure',
    img: 'https://s.gjcdn.net/assets/adventure.8420ba5c.png',
  },
  {
    label: 'indie',
    img: 'https://s.gjcdn.net/assets/fangame.c423343d.png',
  },
  {
    label: 'rpg',
    img: 'https://s.gjcdn.net/assets/rpg.52872556.png',
  },
  {
    label: 'shooters',
    img: 'https://s.gjcdn.net/assets/shooter.583bbf69.png',
  },
  {
    label: 'simulation',
    img: 'https://s.gjcdn.net/assets/arcade.3bff24da.png',
  },
  {
    label: 'sportsRacing',
    img: 'https://s.gjcdn.net/assets/sports.b83213db.png',
  },
  {
    label: 'strategy',
    img: 'https://s.gjcdn.net/assets/strategysim.7005c15c.png',
  },
];

export default Hero;
