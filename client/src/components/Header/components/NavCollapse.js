import React from 'react';
import { NavLink } from 'react-router-dom';

const NavCollapse = ({ isCollapse, navbarItems }) => {
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
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavCollapse;
