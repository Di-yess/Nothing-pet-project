import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Account from './components/Account/Account';
import FeedBack from './components/FeedBackUser/FeedBackUser';
import Layout from './components/Layout/Layout';
import LayoutMenu from './components/LayoutMenu/LayoutMenu';
import Login from './components/Login/Login';
import { getUser } from './store/asyncThunk/getUser';
import { useAppDispatch, useAppSelector } from './types/Apphooks';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.login);

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
          <Route path="feedback" element={<FeedBack />} />
          <Route
            path="account"
            element={user ? <Account /> : <Navigate to="/login" />}
          ></Route>
        </Route>
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;