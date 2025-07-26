import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MainHeader from './MainHeader';
import './MainNavigation.css';
import Backdrop from './Backdrop/Backdrop';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = () => setDrawerIsOpen((prev) => !prev);

  return (
    <>

      <MainHeader>
        {drawerIsOpen && <Backdrop onClick={toggleDrawer} />}
        <button className="main-navigation__menu-btn" onClick={toggleDrawer}>
          <span />
          <span />
          <span />
        </button>

        <h1 className="main-navigation__title">📝 To Do App</h1>

        <nav className={`main-navigation__nav ${drawerIsOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                To Do List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
