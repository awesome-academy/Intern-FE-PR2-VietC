import React, { useState } from 'react';
import './styles.scss';
import Logo from '../../assets/logo.png';
import Navbar from './components/Navbar';
import NavCollapse from './components/NavCollapse';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isCollapse, setIsCollapse] = useState(true);

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <header className='header'>
      <div className='container p-0'>
        <nav className='navbar'>
          <div className='menu-right'>
            <NavLink to='/' className='logo menu-logo'>
              <img src={Logo} alt='Logo games store' />
            </NavLink>
            <Navbar navbarItems={navbarItems} />
          </div>
          <div className='menu-tray'>
            <NavLink to='/cart' className='menu-link menu-link--icon'>
              <span className='menu-count'>0</span>
              <i className='ei ei-icon_cart_alt'></i>
            </NavLink>
            <button className='menu-link menu-link--icon'>
              <i className='ei ei-icon_search'></i>
            </button>
            <NavLink to='/login' className='menu-link menu-link--icon'>
              <i className='far fa-user'></i>
            </NavLink>
            <button
              className='menu-link menu-link--icon d-block d-md-none'
              onClick={() => handleCollapse()}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>
        </nav>
        <NavCollapse isCollapse={isCollapse} navbarItems={navbarItems} />
      </div>
    </header>
  );
};

const navbarItems = [
  {
    label: 'home',
    path: '/',
  },
  {
    label: 'store',
    path: '/products',
    submenuItems: [
      {
        label: 'action',
        path: '/#',
      },
      {
        label: 'adventure',
        path: '/#',
      },
      {
        label: 'indie',
        path: '/#',
      },
      {
        label: 'rpg',
        path: '/#',
      },
      {
        label: 'shooters',
        path: '/#',
      },
      {
        label: 'simulation',
        path: '/#',
      },
      {
        label: 'sportsRacing',
        path: '/#',
      },
      {
        label: 'strategy',
        path: '/#',
      },
    ],
    hasSubmenu: true,
  },
  {
    label: 'about',
    path: '/about',
  },
  {
    label: 'support',
    path: '/support',
  },
  {
    label: 'contact',
    path: '/contact',
  },
];

export default Header;
