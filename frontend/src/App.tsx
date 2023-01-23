import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Account from './components/Account/Account';
import Layout from './components/Layout/Layout';
import LayoutMenu from './components/LayoutMenu/LayoutMenu';
import Login from './components/Login/Login';
import Check from './components/Test/Check';
import Test from './components/Test/Test';
import { getUser } from './store/asyncThunk/getUser';
import { useAppDispatch } from './types/Apphooks';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('use effect app');
    dispatch(getUser());
  }, [dispatch]);

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<LayoutMenu />} />
          <Route path="test" element={<Test />} />
          <Route path="check" element={<Check />} />
          <Route path="account" element={<Account />}></Route>
        </Route>
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
