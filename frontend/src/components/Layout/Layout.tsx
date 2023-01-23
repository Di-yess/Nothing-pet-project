import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Layout.scss';

export default function Layout() {
  const navigate = useNavigate();
  return (
    <>
      {/* <button
        // style={{ position: 'absolute' }}
        onClick={() => navigate('/test')}
      >
        test
      </button>
      <button
        // style={{ position: 'absolute' }}
        onClick={() => navigate('/check')}
      >
        check
      </button> */}
      <Menu>
        <Outlet />
      </Menu>
    </>
  );
}
