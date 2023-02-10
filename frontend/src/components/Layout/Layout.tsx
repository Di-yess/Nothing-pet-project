import { Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Layout.scss';

export default function Layout() {
  return (
    <Menu>
      <Outlet />
    </Menu>
  );
}
