import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Layout.scss';

export default function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <Menu>
        <Outlet />
      </Menu>
    </>
  );
}
