import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ navbarItems }) => {
  return (
    <ul className='main-menu d-none d-md-flex'>
      {navbarItems.map((item, index) => {
        const { label, path } = item;
        return (
          <li>
            <NavLink
              exact
              to={path}
              className='menu-link'
              activeClassName='active'
              key={index}
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
