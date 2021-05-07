import React, { useState } from 'react';
import ProductSidebar from './ProductSidebar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { changePlatform, convertDate } from '../../../utils/utils';
import { useTranslation } from 'react-i18next';

const ProductContent = ({ product }) => {
  const {
    name,
    screenshots,
    pc_requirements,
    mac_requirements,
    linux_requirements,
    detailed_description,
    short_description,
    developer,
    publisher,
    released,
    genres,
    platforms,
  } = product || [];
  const requirements = [pc_requirements, mac_requirements, linux_requirements];
  const { t } = useTranslation();
  const [isExpaned, setIsExpaned] = useState(false);

  const handleExpand = () => {
    setIsExpaned(!isExpaned);
  };

  return (
    <div className='product-content-container'>
      <div className='product-content'>
        <h1 className='product-title'>{name}</h1>
        <div className='row'>
          <div className='col-md-8 order-md-1 order-2'>
            <div className='product-detail'>
              <Slider {...carouselSettings}>
                {screenshots &&
                  screenshots.map((item, index) => {
                    return (
                      <div className='product-img-container' key={index}>
                        <div
                          className='product-img'
                          style={{ backgroundImage: `url(${item})` }}
                        ></div>
                      </div>
                    );
                  })}
              </Slider>
              <p className='product-shortdesc'>{short_description}</p>
              <div className='product-about'>
                <div className='row'>
                  <div className='col-sm-4 col-6'>
                    <div className='about-col'>
                      <div className='about-item'>
                        <h3>{t('developer')}</h3>
                        <p>{developer}</p>
                      </div>
                      <div className='about-item'>
                        <h3>{t('genres')}</h3>
                        <p>
                          {genres &&
                            genres.map((item, index) => {
                              return (
                                <span key={index}>
                                  {t(
                                    `categories.${item
                                      .replace(' & ', '')
                                      .toLowerCase()}`
                                  )}
                                </span>
                              );
                            })}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-4 col-6'>
                    <div className='about-col'>
                      <div className='about-item'>
                        <h3>{t('publisher')}</h3>
                        <p>{publisher}</p>
                      </div>
                      <div className='about-item'>
                        <h3>{t('platforms')}</h3>
                        <p>
                          {platforms &&
                            platforms.map((item, index) => {
                              return (
                                <span key={index}>
                                  <i
                                    className={`fab fa-${changePlatform(item)}`}
                                  ></i>
                                </span>
                              );
                            })}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-4'>
                    <div className='about-col'>
                      <div className='about-item'>
                        <h3>{t('released')}</h3>
                        <p>{convertDate(released)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2>{t('description')}</h2>
              <div
                className='product-description'
                style={{ maxHeight: isExpaned ? '100%' : '300px' }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      detailed_description &&
                      detailed_description.replace(/\\"/g, '"'),
                  }}
                ></div>
              </div>
              <div className='product-button'>
                <button
                  className='btn btn-block btn-expand'
                  onClick={() => handleExpand()}
                >
                  {t(isExpaned ? 'showLess' : 'showMore')}
                  <i
                    className={`ei ei-arrow_carrot-${
                      isExpaned ? 'up' : 'down'
                    }`}
                  ></i>
                </button>
                <div
                  className='button-overlay'
                  style={{ display: isExpaned ? 'none' : 'block' }}
                ></div>
              </div>
            </div>
          </div>
          <div className='col-md-4 order-md-2 order-1'>
            <ProductSidebar product={product} />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8'>
          <h2>{t('specifications')}</h2>
          <div className='product-specific'>
            <div className='requirements-table'>
              <Tabs>
                <TabList>
                  {platforms &&
                    platforms.map((item, index) => {
                      return <Tab key={index}>{item}</Tab>;
                    })}
                </TabList>
                {requirements
                  .filter((item) => item)
                  .map((item, index) => {
                    return (
                      <TabPanel key={index}>
                        <div className='row'>
                          {item &&
                            Object.values(item).map((item, index) => {
                              return (
                                <div className='col-6' key={index}>
                                  <div
                                    className='requirements-item'
                                    dangerouslySetInnerHTML={{
                                      __html: item && item.replace(/\"/g, ''),
                                    }}
                                  ></div>
                                </div>
                              );
                            })}
                        </div>
                      </TabPanel>
                    );
                  })}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default ProductContent;
