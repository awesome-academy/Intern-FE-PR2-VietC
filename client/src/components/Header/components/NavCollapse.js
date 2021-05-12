import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavCollapse = ({ isCollapse, navbarItems }) => {
  const { t } = useTranslation();

  return (
    <div className='d-block d-md-none'>
      <ul className={`nav-collapse ${isCollapse ? '' : 'active'}`}>
        {navbarItems.map((item, index) => {
          const { label, path } = item;
          return (
            <li key={index}>
              <NavLink
                exact
                to={path}
                className='menu-link'
                activeClassName='active'
              >
                {t(label)}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavCollapse;
