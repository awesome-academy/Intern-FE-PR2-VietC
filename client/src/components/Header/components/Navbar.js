import React from 'react';
import Windows from '../../../assets/windows-cover.jpg';
import Mac from '../../../assets/mac-cover.jpg';
import Linux from '../../../assets/linux-cover.jpg';
import { NavLink } from 'react-router-dom';

const Navbar = ({ navbarItems }) => {
  return (
    <ul className='main-menu d-none d-md-flex'>
      {navbarItems.map((item, index) => {
        const { label, path, submenuItems, hasSubmenu } = item;
        if (hasSubmenu) {
          return (
            <li className='submenu' key={index}>
              <NavLink
                exact
                to={path}
                className='menu-link'
                activeClassName='active'
              >
                {label}
                <i className='ei ei-arrow_carrot-down'></i>
              </NavLink>
              <div className='submenu-content d-none d-md-block'>
                <div className='submenu-inner'>
                  <h1>All Categories</h1>
                  <div className='row pb-3'>
                    {submenuItems.map((item, index) => {
                      const { label, path } = item;
                      return (
                        <div className='col-4' key={index}>
                          <NavLink exact to={path} className='submenu-item'>
                            {label}
                          </NavLink>
                        </div>
                      );
                    })}
                  </div>
                  <h1>Browser All Games</h1>
                  <div className='menu-collection'>
                    <div className='row'>
                      <div className='col-4'>
                        <NavLink
                          to='/#'
                          className='menu-collection-item d-block'
                        >
                          <img src={Windows} alt='Games for windows' />
                          <p>All games for Windows</p>
                        </NavLink>
                      </div>
                      <div className='col-4'>
                        <NavLink
                          to='/#'
                          className='menu-collection-item d-block'
                        >
                          <img src={Mac} alt='Games for mac' />
                          <p>All games for Mac</p>
                        </NavLink>
                      </div>
                      <div className='col-4'>
                        <NavLink
                          to='/#'
                          className='menu-collection-item d-block'
                        >
                          <img src={Linux} alt='Games for linux' />
                          <p>All games for Linux</p>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        }
        return (
          <li key={index}>
            <NavLink
              exact
              to={path}
              className='menu-link'
              activeClassName='active'
            >
              {label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
