import React, { useState } from 'react';
import './styles.scss';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n && i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-top'>
          <div className='languages'>
            <span>{t('language')}</span>
            {languages.map((item, index) => {
              const { label, lang } = item;
              return (
                <button
                  className={`language-item ${
                    currentLanguage === lang ? 'active' : ''
                  }`}
                  key={index}
                  onClick={() => changeLanguage(lang)}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div className='socials'>
            {socials.map((item, index) => {
              const { icon, path } = item;
              return (
                <Link to={path} className='social-item' key={index}>
                  <i className={`fab fa-${icon}`}></i>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className='footer-middle text-center'>
        <Link to='/' className='logo mb-3'>
          <img src={Logo} alt='Logo games store' />
        </Link>
        <ul className='footer-links'>
          {footerLinks.map((item, index) => {
            const { label, path } = item;
            return (
              <li className='footer-link' key={index}>
                <Link to={path}>{t(label)}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='footer-bottom'>
        <p className='text-center'>
          Copyright &copy; 2021, Vie Games Store Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const languages = [
  {
    label: 'English',
    lang: 'en',
  },
  {
    label: 'Vietnamese',
    lang: 'vi',
  },
];

const socials = [
  {
    icon: 'facebook-square',
    path: '/#',
  },
  {
    icon: 'twitter',
    path: '/#',
  },
  {
    icon: 'twitch',
    path: '/#',
  },
  {
    icon: 'discord',
    path: '/#',
  },
];

const footerLinks = [
  {
    label: 'legal',
    path: '/#',
  },
  {
    label: 'terms',
    path: '/#',
  },
  {
    label: 'privacyPolicy',
    path: '/#',
  },
  {
    label: 'cookiePolicy',
    path: '/#',
  },
  {
    label: 'support',
    path: '/#',
  },
];

export default Footer;
